import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsWomenComponent } from './products-women.component';

describe('ProductsWomenComponent', () => {
  let component: ProductsWomenComponent;
  let fixture: ComponentFixture<ProductsWomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsWomenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
