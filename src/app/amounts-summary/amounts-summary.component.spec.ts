import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountsSummaryComponent } from './amounts-summary.component';

describe('AmountsSummaryComponent', () => {
  let component: AmountsSummaryComponent;
  let fixture: ComponentFixture<AmountsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountsSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
