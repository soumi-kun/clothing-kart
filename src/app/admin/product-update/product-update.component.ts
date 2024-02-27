import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/shared/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  constructor(public service: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (this.service.product.id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.addProduct(this.service.product).subscribe(
      res => {
        // console.log(this.service.formData);
        this.resetForm(form);        
        alert('Product Submitted successfully');
        this.router.navigate(["admin/list"]);

      },
      err => { alert('Product not Submitted successfully'); 
        this.router.navigate(["admin/list"]);

      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.updateProduct(this.service.product).subscribe(
      res => {
        this.resetForm(form);
        alert('Updated successfully');
        this.router.navigate(["admin/list"]);

      },
      err => { alert('Product not updated successfully'); 
        this.router.navigate(["admin/list"]);

      }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.product = new Product();
  }

}
