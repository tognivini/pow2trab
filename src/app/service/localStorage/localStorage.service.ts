import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storage: Storage;

  set(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  get(key: string): any {
    if (this.storage) {
      const value = window.localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      } else return null;
    }
    return null;
  }

  clear(): boolean {
    if (this.storage) {
      this.storage.clear();
      return true;
    }
    return false;
  }

  constructor() {
    this.storage = window.localStorage;
  }
}
