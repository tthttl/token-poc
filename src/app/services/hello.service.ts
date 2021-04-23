import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor(private httpClient: HttpClient) {
  }

  sayHello(){
    //call api
  }

}
