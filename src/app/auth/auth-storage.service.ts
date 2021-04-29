import { Injectable } from '@angular/core';
import { AbstractSecurityStorage } from 'angular-auth-oidc-client';

@Injectable()
export class AuthStorage implements AbstractSecurityStorage {

  private tokenKey = 'authnResult';
  private inMemoryStorage: Map<string, any> = new Map<string, any>();

  public read(key: string): any {
    if(this.isToken(key)){
      return this.inMemoryStorage.get(key);
    } else {
      const result = sessionStorage.getItem(key);
      try {
        return JSON.parse(result);
      } catch (error){
        return result;
      }
    }
  }

  // do not stringify if already string
  // null check
  public write(key: string, value: any): void {
    if (this.isToken(key)) {
      this.inMemoryStorage.set(key, value);
    } else {
      if (value && typeof value !== 'string') {
        sessionStorage.setItem(key, JSON.stringify(value));
      } else {
        sessionStorage.setItem(key, value);
      }
    }
  }

  public remove(key: string): void {
    this.isToken(key) ? this.inMemoryStorage.delete(key) : sessionStorage.removeItem(key);
  }

  isToken(key: string) {
    return key.includes(this.tokenKey);
  }

}
