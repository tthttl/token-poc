import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  //inject library
  constructor() {
  }

  validate(token: string): boolean{
    return true;
  }

}
