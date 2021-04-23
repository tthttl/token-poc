import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Token, TokenType } from '../../models/model';
import { HelloService } from '../../services/hello.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit{

  idToken: Observable<Token>;
  authorizationToken: Observable<Token>;

  constructor(
    private tokenService: TokenService,
    private helloService: HelloService
  ) {
  }

  ngOnInit(): void {
    this.idToken = this.tokenService.getToken('idToken');
    this.authorizationToken = this.tokenService.getToken('authorizationToken');
  }

  loginClicked(){
    // TODO remove and navigate to Airlock instead
    this.tokenService.setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      'idToken');
    this.tokenService.setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      'authorizationToken');
  }

  sayHelloClicked(){
    this.helloService.sayHello();
  }

  invalidateClicked(){
    // delete or expire token(s)
  }

  tokenChanged(payload: { type: TokenType, token: string}){
    this.tokenService.setToken(payload.token, payload.type);
  }

}
