import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDashboardComponent,
    ProductUpdateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatInputModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    FormsModule,
    NgxChartsModule
     
   ],
   exports:[
    MatTableModule,
    MatInputModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule
   ]
})
export class AdminModule { }
