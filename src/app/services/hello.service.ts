import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor(private httpClient: HttpClient) {
  }

  sayHello(): Observable<string> {
    return this.httpClient.get<string>(environment.apiUrl);
  }

}
