import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product = new Product;

  constructor(public productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = String(routeParams.get('id'));

  // Find the product that correspond with the id provided in route.
    this.productService.getProductFromId(productIdFromRoute).subscribe(
    result => {
      this.product = result;
    });
  }

}
