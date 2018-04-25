import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BellCurveChartComponent } from './bell-curve-chart.component';

describe('BellCurveChartComponent', () => {
  let component: BellCurveChartComponent;
  let fixture: ComponentFixture<BellCurveChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BellCurveChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BellCurveChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
