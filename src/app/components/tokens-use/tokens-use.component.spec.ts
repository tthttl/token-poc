import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokensUseComponent } from './tokens-use.component';

describe('TokensUseComponent', () => {
  let component: TokensUseComponent;
  let fixture: ComponentFixture<TokensUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokensUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokensUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
