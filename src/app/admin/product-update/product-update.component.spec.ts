import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUpdateComponent } from './product-update.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductService } from 'src/app/shared/services/product.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('ProductUpdateComponent', () => {
  let component: ProductUpdateComponent;
  let fixture: ComponentFixture<ProductUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductUpdateComponent ],
      imports: [HttpClientTestingModule, 
        RouterTestingModule.withRoutes([]),
        FormsModule],
      providers: [ProductService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
