import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  items$: Observable<Item[]> |  undefined;
  constructor(
    private cartService: CartService) { }

  ngOnInit(): void {
    this.items$ = this.cartService.getItems();
  }

  updatedQuantity($event: Event, item: Item){
    const quantity = ($event as any)?.target?.value;
    this.cartService.updateQuantity(quantity, item);
  }

  deleteItem(item: Item) {
    this.cartService.deleteItem(item);
  }
}
