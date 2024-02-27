import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-subtotal',
  templateUrl: './cart-subtotal.component.html',
  styleUrls: ['./cart-subtotal.component.css']
})
export class CartSubtotalComponent implements OnInit {

  count$: Observable<number> | undefined;
  subTotal$: Observable<number> | undefined;
  constructor(
    private cartService:CartService
  ) { }

  ngOnInit(): void {
    this.subTotal$ = this.cartService.getSubTotal();
    this.count$ = this.cartService.getCount();
  }

}
