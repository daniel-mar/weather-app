import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastCards } from './forecast-cards';

describe('ForecastCards', () => {
  let component: ForecastCards;
  let fixture: ComponentFixture<ForecastCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForecastCards],
    }).compileComponents();

    fixture = TestBed.createComponent(ForecastCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
