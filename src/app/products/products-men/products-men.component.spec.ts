import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsMenComponent } from './products-men.component';

describe('ProductsMenComponent', () => {
  let component: ProductsMenComponent;
  let fixture: ComponentFixture<ProductsMenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsMenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
