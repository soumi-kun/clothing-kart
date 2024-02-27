import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BannerArticleComponent } from './banner-article/banner-article.component';
import { BannerCategoryComponent } from './banner-category/banner-category.component';
import { DealsCarouselComponent } from './deals-carousel/deals-carousel.component';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BannerArticleComponent,
    BannerCategoryComponent,
    DealsCarouselComponent,
    HomeComponent
    ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
