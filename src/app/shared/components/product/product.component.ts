import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { Item } from '../../models/cart.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product = new Product;
  cartItem: Product[] = [];
  item: Item[] = [];

  constructor(public productService: ProductService,
    private route: ActivatedRoute,
    public cartService: CartService) { }

  ngOnInit(): void {

  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = String(routeParams.get('id'));

  // Find the product that correspond with the id provided in route.
    this.productService.getProductFromId(productIdFromRoute).subscribe(
    result => {
      this.product = result;
      this.cartItem.push(this.product);
    });
  }

  addToCart(){
    if(confirm("Are you sure you want to add this product to cart?")){
      const count = this.cartService.getCartItemsCount() + 1; 
      this.item = this.cartItem.map(product => ({
        
      id: count.toString(),
      quantity: 1,
      sku: {
        id: product.id.toString(),
        title: product.name,
        price: parseFloat(product.price)
      }
      }));
      this.cartService.addQuantity(this.item[0]);
      alert("added successfully");

    }
  }

}
