import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokensViewComponent } from './tokens-view.component';

describe('TokensViewComponent', () => {
  let component: TokensViewComponent;
  let fixture: ComponentFixture<TokensViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokensViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokensViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
