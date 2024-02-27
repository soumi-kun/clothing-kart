import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopbyCategoriesCarouselComponent } from './shopby-categories-carousel.component';

describe('ShopbyCategoriesCarouselComponent', () => {
  let component: ShopbyCategoriesCarouselComponent;
  let fixture: ComponentFixture<ShopbyCategoriesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopbyCategoriesCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopbyCategoriesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
