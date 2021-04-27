import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  url = 'http://pcs67043.css.ch:9080/api/poc';

  constructor(private httpClient: HttpClient) {
  }

  sayHello(): Observable<string>{
    return this.httpClient.get<string>(this.url);
  }

}
