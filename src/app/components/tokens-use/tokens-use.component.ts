import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tokens-use',
  templateUrl: './tokens-use.component.html',
  styleUrls: ['./tokens-use.component.scss']
})
export class TokensUseComponent {

  @Output() sayHello: EventEmitter<void> = new EventEmitter();
  @Output() invalidate: EventEmitter<void> = new EventEmitter();

  sayHelloClicked(){
    this.sayHello.emit();
  }

  invalidateClicked(){
    this.invalidate.emit();
  }

}
