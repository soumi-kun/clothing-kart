import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletsCarouselComponent } from './outlets-carousel.component';

describe('OutletsCarouselComponent', () => {
  let component: OutletsCarouselComponent;
  let fixture: ComponentFixture<OutletsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutletsCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
