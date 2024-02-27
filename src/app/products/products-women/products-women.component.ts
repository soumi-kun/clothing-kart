import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-women',
  templateUrl: './products-women.component.html',
  styleUrls: ['./products-women.component.css']
})
export class ProductsWomenComponent implements OnInit {
  bannerImage: string ='assets/images/outfit.png';

  constructor() { }

  ngOnInit(): void {
  }

}
