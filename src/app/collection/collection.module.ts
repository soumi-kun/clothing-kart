import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionComponent } from './collection.component';
import { SharedModule } from '../shared/shared.module';
import { ShopbyCategoriesCarouselComponent } from './shopby-categories-carousel/shopby-categories-carousel.component';


@NgModule({
  declarations: [
    CollectionComponent,
    ShopbyCategoriesCarouselComponent
  ],
  imports: [
    CommonModule,
    CollectionRoutingModule,
    SharedModule
  ]
})
export class CollectionModule { }
