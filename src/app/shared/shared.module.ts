import { NgModule } from '@angular/core';
import { ProductFilter } from './pipes/productfilter.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { OutletsCarouselComponent } from './components/outlets-carousel/outlets-carousel.component';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  declarations: [
    ProductFilter,
    OutletsCarouselComponent,
    FooterComponent,
    ProductComponent,
    
  ],
  exports: [
    ProductFilter,
    OutletsCarouselComponent,
    FooterComponent,
    ProductComponent
  ]
})
export class SharedModule { }
