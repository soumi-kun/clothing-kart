import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CartSubtotalComponent } from './cart-subtotal/cart-subtotal.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';


@NgModule({
  declarations: [
    CartComponent,
    CartItemsComponent,
    CartSubtotalComponent,
    CartSummaryComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  exports: [
    CartItemsComponent,
    CartComponent,
    CartSubtotalComponent,
    CartSummaryComponent
  ]
})
export class CartModule { }
