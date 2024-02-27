import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  count$: Observable<number> | undefined;

  constructor(
    private cartService: CartService

  ) { }

  ngOnInit(): void {
    this.count$ = this.cartService.getCount();

  }

}
