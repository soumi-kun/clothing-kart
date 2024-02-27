import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsWomenComponent } from './products-women/products-women.component';
import { ProductsMenComponent } from './products-men/products-men.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'women',
        component: ProductsWomenComponent
      },
      {
        path: 'men',
        component: ProductsMenComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
