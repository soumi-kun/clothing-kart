import { Injectable, IterableDiffers } from "@angular/core";
import { BehaviorSubject, Observable, map, pluck} from "rxjs";
import { Item, ShoppingCart } from "../models/cart.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class CartService{
    private shoppingCart$: BehaviorSubject<ShoppingCart>;

    constructor(private httpClient: HttpClient){

        //initialise the default state of shopping cart
        this.shoppingCart$ = new BehaviorSubject<ShoppingCart>({id:'', items:[], subTotal:0});
        this.getShoppingCart();
    }

    private getShoppingCart(){
        this.httpClient.get<ShoppingCart>('/assets/data.json').subscribe(
            result => this.setShoppingCart(result));
    }

    private setShoppingCart(shoppingcart: ShoppingCart){
        this.shoppingCart$.next(shoppingcart);
    }

    getItems(): Observable<Item[]>{
        return this.shoppingCart$.pipe(
            pluck('items')
        );
    }

    getSubTotal(): Observable<number> {
        return this.shoppingCart$.pipe(
          map((shoppingCart) => {
            const subTotal = shoppingCart?.items
              .map((item) => item.quantity * item.sku.price)
              .reduce((p, c) => p + c, 0);
            return subTotal;
          })
        );
    }
    
    getCount(): Observable<number> {
        return this.shoppingCart$.pipe(
          map((shoppingCart) => {
            const count = shoppingCart.items
              .map((item) => item.quantity)
              .reduce((p, c) => p + c, 0);
            return count;
          })
        );
    }
    
    updateQuantity(updateQuantity: number, updateItem: Item) {
        const shoppingCart = { ...this.shoppingCart$.value };
        shoppingCart.items = shoppingCart.items.map((item) => {
          item.quantity = item.id === updateItem.id ? +updateQuantity : item.quantity;
          return item;
        });
        this.setShoppingCart(shoppingCart);
    }

    deleteItem(deleteItem: Item) {
        const shoppingCart = { ...this.shoppingCart$.value };
        shoppingCart.items = shoppingCart.items.filter((item) => deleteItem.id !== item.id);
        this.setShoppingCart(shoppingCart);
    }

}