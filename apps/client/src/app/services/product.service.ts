import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IProduct {
  name: string;
  price: number;
  stock: number;
  description: string;
  imageUrl: string;
}

const PRODUCT_API = 'http://localhost:3333/api/products/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'any',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(PRODUCT_API, httpOptions);
  }

  getProduct(id: string): Observable<any> {
    return this.http.get(PRODUCT_API + id, httpOptions);
  }

  addProduct({ ...data }: IProduct): Observable<any> {
    return this.http.post(PRODUCT_API, { ...data }, httpOptions);
  }
}
