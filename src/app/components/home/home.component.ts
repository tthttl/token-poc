import { Component, Input, OnInit } from '@angular/core';
import { Token } from '../../models/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() idToken: Token;
  @Input() authorizationToken: Token;

  constructor() { }

  ngOnInit(): void {
  }

}
