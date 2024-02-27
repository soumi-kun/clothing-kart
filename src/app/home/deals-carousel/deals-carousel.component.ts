import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { isEmptyObject } from 'jquery';

@Component({
  selector: 'app-deals-carousel',
  templateUrl: './deals-carousel.component.html',
  styleUrls: ['./deals-carousel.component.css']
})
export class DealsCarouselComponent implements OnInit {

  constructor(public productService:ProductService) { }

  ngOnInit(): void {
    this.getProductsIfListIsEmpty();
  }

  getProductsIfListIsEmpty(){
    if(this.productService.productList == null){
      this.productService.getProducts();
    }
  }

}
