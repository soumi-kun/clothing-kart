import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsWomenComponent } from './products-women/products-women.component';
import { ProductsMenComponent } from './products-men/products-men.component';
import { SharedModule } from '../shared/shared.module';
import { ExclusiveBannerComponent } from './exclusive-banner/exclusive-banner.component';
import { NewProductsCarouselComponent } from './new-products-carousel/new-products-carousel.component';


@NgModule({
  declarations: [
    ProductsWomenComponent,
    ProductsMenComponent,
    ExclusiveBannerComponent,
    NewProductsCarouselComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
