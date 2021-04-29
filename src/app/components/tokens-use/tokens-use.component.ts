import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tokens-use',
  templateUrl: './tokens-use.component.html',
  styleUrls: ['./tokens-use.component.scss']
})
export class TokensUseComponent {

  @Input() apiResponse: string;
  @Output() sayHello: EventEmitter<void> = new EventEmitter();
  @Output() invalidate: EventEmitter<void> = new EventEmitter();

  sayHelloClicked(){
    this.sayHello.emit();
  }

  invalidateClicked(){
    this.invalidate.emit();
  }

}
