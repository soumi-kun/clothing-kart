import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductUpdateComponent } from './product-update/product-update.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'list',
        component: ProductListComponent
      },
      {
        path: 'dashboard',
        component: ProductDashboardComponent
      },
      {
        path: 'update',
        component: ProductUpdateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
