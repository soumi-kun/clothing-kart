import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { NewProductsCarouselComponent } from './new-products-carousel.component';
import { ProductService } from 'src/app/shared/services/product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductFilter } from 'src/app/shared/pipes/productfilter.pipe';
import { delay, of } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';

describe('NewProductsCarouselComponent', () => {
  let component: NewProductsCarouselComponent;
  let fixture: ComponentFixture<NewProductsCarouselComponent>;

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
      imports: [HttpClientTestingModule],
      declarations: [ NewProductsCarouselComponent, ProductFilter],
      providers: [ProductService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProductsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    let spy_getProductsIfListIsEmpty = spyOn(component,"getProductsIfListIsEmpty").and.callFake(() => {
      return [];
    });
    component.ngOnInit();
    expect(component.productService.productList).toEqual(undefined);
  });

  it('should call getProducts and get response as empty products', fakeAsync(() => {
    const productService = fixture.debugElement.injector.get(ProductService);
    let spy_getProducts = spyOn(productService,"getProducts").and.callFake(() => {
      return of([]).pipe(delay(50));
    });
    component.getProductsIfListIsEmpty();
    tick(100);
    expect(component.productService.productList).toEqual(undefined);
  }));

  it('should call getProducts and get response as Products', fakeAsync(() => {
    const productService = fixture.debugElement.injector.get(ProductService);
    let spy_getProducts = spyOn(productService,"getProducts").and.callFake(() => {
      return of(products).pipe(delay(50));
    });
    component.getProductsIfListIsEmpty();
    tick(100);
    expect(component.productService.productList).toEqual(undefined);
  }));

});
