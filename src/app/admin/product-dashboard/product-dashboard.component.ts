import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {

  products: Product[] = [];
  productsStockData: { name: string, value: number }[] = [];
  displayedProductsStockData: { name: string, value: number }[] = [];
  productSalesData: { name: string, value: number }[] = [];
  displayedProductsSalesData: { name: string, value: number }[] = [];
  currentPage = 1;
  productsPerPage = 5;


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    
    this.getProducts();
  }

  getProducts(){
    this.productService.getProductsList().subscribe((result) => {
      this.products = result as Product[];
      this.productsStockData = this.products.map(product => ({
        name: product.name,
        value: product.availableStock
      }));
      this.productSalesData = this.products.map(product => ({
        name: product.name,
        value: product.maxStockThreshold - product.availableStock,
      }));
      this.updateDisplayedProducts();

    },
    ()=>{
      alert("Internal Server Error.There was an error retrieving your request. Please contact support");
    }
    );
  }

  updateDisplayedProducts() {
    const startIndex = (this.currentPage - 1) * this.productsPerPage;
    const endIndex = startIndex + this.productsPerPage;
    this.displayedProductsStockData = this.productsStockData.slice(startIndex, endIndex);
    this.displayedProductsSalesData = this.productSalesData.slice(startIndex, endIndex);
  }

  nextPage() {
    const totalPages = Math.ceil(this.productsStockData.length / this.productsPerPage);
    this.currentPage = (this.currentPage % totalPages) + 1;
    this.updateDisplayedProducts();
  }

  totalPages(): number {
    return Math.ceil(this.productsStockData.length / this.productsPerPage);
  }

}
