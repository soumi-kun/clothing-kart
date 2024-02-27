import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './shared/components/product/product.component';
import { UserauthguardGuard } from './userauthguard.guard';
import { MsalGuard } from '@azure/msal-angular';

const routes: Routes = [

      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
        
      },
      {
        path: 'collection',
        loadChildren: () => import('./collection/collection.module').then(m => m.CollectionModule),
        
      },
      {
        path: 'admin',
        data: {
          //Role based authorization
          roles: ['Task.Write']
        },
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate:[UserauthguardGuard]
        
      },
      {
        path: 'cart',
        loadChildren: () => import('./shared/cart/cart.module').then(m => m.CartModule), canActivate:[MsalGuard]
      },
      {
        path: 'product/:id',
        component: ProductComponent,
        canActivate:[MsalGuard]
        
      },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
