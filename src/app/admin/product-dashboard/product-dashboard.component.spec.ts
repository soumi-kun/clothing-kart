import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDashboardComponent } from './product-dashboard.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductService } from 'src/app/shared/services/product.service';

describe('ProductDashboardComponent', () => {
  let component: ProductDashboardComponent;
  let fixture: ComponentFixture<ProductDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDashboardComponent ],
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
