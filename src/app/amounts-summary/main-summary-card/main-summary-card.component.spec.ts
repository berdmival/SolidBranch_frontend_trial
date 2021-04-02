import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSummaryCardComponent } from './main-summary-card.component';

describe('MainSummaryCardComponent', () => {
  let component: MainSummaryCardComponent;
  let fixture: ComponentFixture<MainSummaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSummaryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
