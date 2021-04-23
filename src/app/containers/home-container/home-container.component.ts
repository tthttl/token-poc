import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from '../../models/model';
import { HelloService } from '../../services/hello.service';
import { TokenService } from '../../services/token.service';
import { ValidationService } from '../../services/validation.service';

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

}
