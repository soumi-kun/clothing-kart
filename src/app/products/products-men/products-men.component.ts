import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-men',
  templateUrl: './products-men.component.html',
  styleUrls: ['./products-men.component.css']
})
export class ProductsMenComponent implements OnInit {

  bannerImage: string ='assets/images/sharp-dress.png';
  constructor() { }

  ngOnInit(): void {
  }

}
