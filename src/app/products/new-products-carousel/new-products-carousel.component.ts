import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-new-products-carousel',
  templateUrl: './new-products-carousel.component.html',
  styleUrls: ['./new-products-carousel.component.css']
})
export class NewProductsCarouselComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.getProductsIfListIsEmpty();
  }

  getProductsIfListIsEmpty(){
    if(this.productService.productList == null){
      this.productService.getProducts();
    }
  }

}
