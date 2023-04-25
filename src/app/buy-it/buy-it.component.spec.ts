import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyItComponent } from './buy-it.component';

describe('BuyItComponent', () => {
  let component: BuyItComponent;
  let fixture: ComponentFixture<BuyItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyItComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
