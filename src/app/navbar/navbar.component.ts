import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';
import { ProductService } from '../shared/services/product.service';
import { CartService } from '../shared/services/cart.service';
import { Observable } from 'rxjs/internal/Observable';
import { Subject, debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  count$: Observable<number> | undefined;
  isInputFocused: boolean = false;
  products: Observable<Product[]> = new Observable<[]>();
  
  constructor(
    private msalService: MsalService,
    private productService: ProductService,
    private cartService: CartService

  ) {   }

  ngOnInit(): void {
    this.count$ = this.cartService.getCount();
  }

  search(term: any): void {
    if (!term.target.value.trim()) {
      this.products = of([]);
      return;
    }

    this.products = this.productService.getProduct()
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(products => this.searchLocally(products, term.target.value))
      );
  }

  private searchLocally(products: Product[], term: string): Observable<Product[]> {
    const matchingProducts = products.filter(product =>
      product.name.toLowerCase().includes(term.toLowerCase())).slice(0,5);

    if (matchingProducts.length > 0) {
      return of(matchingProducts);
    } else {
      // Call the backend service here if no local results are found
      return of([]);
    }
  }

  onFocus(): void {
    this.isInputFocused = true;
  }

  onBlur(): void {
    // Delay hiding the input field to allow clicking on the search results
    setTimeout(() => {
      this.isInputFocused = false;
      this.products = of([]);
    }, 200);
  }

  isUserLoggedIn():boolean
 {
  if(this.msalService.instance.getActiveAccount()!=null)
    {
      return true;
    }
  else{
      return false;
    }
 }

 login()
  {
    this.msalService.loginPopup().subscribe((response:AuthenticationResult)=>{
        this.msalService.instance.setActiveAccount(response.account);
        this.productService.idToken = response.idToken;
    })
  }

  isAdmin(): boolean{
    let allAccounts = this.msalService.instance.getActiveAccount();
      if (allAccounts) {
        let roles = allAccounts.idTokenClaims?.roles ?? "";
        if(roles == "Task.Write"){
            return true;
          }
      }
      return false;
  }

  logout()
  {
    if(confirm("Are you sure you want to logout?")){

      this.msalService.logoutPopup();
      this.productService.idToken = '';
    }
  }

}
