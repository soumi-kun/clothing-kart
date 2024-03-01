import { Injectable } from "@angular/core";
import{ HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from "../models/product.model";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root'
})
export class ProductService{
    readonly baseURL: string = environment.baseUrl + 'api/product';
    product: Product = new Product();
    productList: any;
    idToken: string = '';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(private http: HttpClient){}

    getProducts(){
        this.http.get(this.baseURL)
        .toPromise()
        .then(
            result => this.productList = result as Product[]

        );
    }

    getProduct(): Observable<Product[]> {
        return of(this.productList);
      }

    getProductsList(): Observable<Product[]> {
        
        var result = this.http.get<Product[]>(this.baseURL);
        return result;
    }

    getProductFromId(id:string): Observable<Product> {
        var result = this.http.get<Product>(`${this.baseURL}/${id}`);
        return result;
    }


    addProduct(product: Product){
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + this.idToken
            })
        }
        return this.http.post(this.baseURL, product, this.httpOptions);
    }

    updateProduct(product: Product){
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + this.idToken
            })
        }
        return this.http.put(this.baseURL, product, this.httpOptions);
    }

    deleteProduct(id: number){
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + this.idToken
            })
        }
        return this.http.delete(`${this.baseURL}/${id}`,this.httpOptions);
    }

}