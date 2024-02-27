import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductService } from 'src/app/shared/services/product.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Product } from 'src/app/shared/models/product.model';
import { of, delay } from 'rxjs';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let products: Product[] = [
    {
    id: 1,
    name: 'Shirt',
    description: 'Mens Shirt',
    price: '170',
    pictureFileName: 'shirt.png',
    pictureUri: 'asets/shirt.png',
    catalogTypeId: 1,
    catalogBrandId: 1,
    availableStock: 5,
    restockThreshold: 5,
    maxStockThreshold: 5,
    onReorder: true,
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent],
      imports: [HttpClientTestingModule,
        RouterTestingModule.withRoutes([])],
      providers: [ProductService]
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    let spy_getProductsIfListIsEmpty = spyOn(component,"getProductList").and.callFake(() => {
      return [];
    });
    component.ngOnInit();
    expect(component.dataSource.data).toEqual([]);
  });

  it('should call getProductList and get response as empty products', fakeAsync(() => {
    const productService = fixture.debugElement.injector.get(ProductService);
    let spy_getProducts = spyOn(productService,"getProductsList").and.callFake(() => {
      return of([]).pipe(delay(100));
    });
    component.getProductList();
    tick(100);
    expect(component.dataSource.data).toEqual([]);
  }));

  it('should call getProductList and get response as Products', fakeAsync(() => {
    const productService = fixture.debugElement.injector.get(ProductService);
    let spy_getProducts = spyOn(productService,"getProductsList").and.callFake(() => {
      return of(products).pipe(delay(100));
    });
    component.getProductList();
    tick(100);
    expect(component.dataSource.data).toEqual(products);
  }));
});
