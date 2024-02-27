import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCategoryComponent } from './banner-category.component';

describe('BannerCategoryComponent', () => {
  let component: BannerCategoryComponent;
  let fixture: ComponentFixture<BannerCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
