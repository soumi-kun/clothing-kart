import { Component, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {AfterViewInit, ViewChild} from '@angular/core';

import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/shared/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  
})
export class ProductListComponent implements OnInit, AfterViewInit {

  productList: Product[] = [];

  displayedColumns: string[] = 
    [
      'name',
      'price',
      'description',
      'pictureFileName',
      'pictureUri',
      'catalogTypeId',
      'catalogBrandId',
      'availableStock',
      'restockThreshold',
      'maxStockThreshold',
      'onReorder',
      'edit', 
      'delete'
    ];

  public dataSource = new MatTableDataSource<Product>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer,
    private productService:ProductService,
    private router: Router,
    ) {}


  ngOnInit(): void {
    this.getProductList();
  }

  public getProductList(){
    this.productService.getProductsList().subscribe((result) => {
      this.dataSource.data = result as Product[];
    },
    ()=>{
      alert("Internal Server Error.There was an error retrieving your request. Please contact support");
    }
    );
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  public doFilter(value: any){
    this.dataSource.filter = value.target.value.trim().toLocaleLowerCase();
  }

  editbuttonclicked(data: Product)
  {
    if (data!=undefined && data!=null) {
      this.productService.product = Object.assign({}, data);
      this.router.navigate(["admin/update"]);
    }
  }

  deletebuttonclicked(id: number)
  {
    if(confirm("Are you sure to delete this product?")){
      this.productService.deleteProduct(id).subscribe(
        result => {
          this.getProductList();
          alert("Deleted successfully");
        }
      );
    }
  }

}
