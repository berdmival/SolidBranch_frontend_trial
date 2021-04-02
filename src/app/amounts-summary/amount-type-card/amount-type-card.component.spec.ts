import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountTypeCardComponent } from './amount-type-card.component';

describe('AmountTypeCardComponent', () => {
  let component: AmountTypeCardComponent;
  let fixture: ComponentFixture<AmountTypeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountTypeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountTypeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
