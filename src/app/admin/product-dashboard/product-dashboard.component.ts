import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {

  products: any;
  salesData: any;
  stockData: any;
  dateFilter: string = 'all'; // You can expand this with more filters
  colorSchemeSales = { name: 'cool' };
  colorSchemetock = { name: 'natural' };

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // this.products = this.productService.getProduct();
    this.updateChartData();
  }

  updateChartData(): void {
    // Implement logic to fetch sales and stock data based on the dateFilter
    this.salesData = [
      { name: 'January', value: 10 },
      { name: 'February', value: 15 },
      { name: 'March', value: 25 },
      { name: 'April', value: 20 },
      { name: 'May', value: 30 },
      
    ];

    this.stockData = [
      { name: 'January', value: 50 },
      { name: 'February', value: 40 },
      { name: 'March', value: 30 },
      { name: 'April', value: 45 },
      { name: 'May', value: 60 },
    ];
  }

  applyFilter(filter: string): void {
    this.dateFilter = filter;
    this.updateChartData();
  }
}
