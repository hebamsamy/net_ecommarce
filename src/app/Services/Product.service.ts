import { Injectable } from '@angular/core';
import { IProduct } from '../ViewModels/IProduct';
import { ICategory } from '../ViewModels/Icategory';
import { HttpClient } from '@angular/common/http';
import { APIResult } from '../ViewModels/apiResult';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private Http:HttpClient) { }

// http://localhost:5000/product
  getAll(){
    return this.Http.get<APIResult>("http://localhost:5000/product")
    // return this.Products;
  }

  getById(id: number) {
    // return this.Products.find(p => p.id == id);
  }
  getByCatID(id: number) {
    // return this.Products.filter(p => p.categoryID == id);
  }
  getbest(){}
    // let arr :IProduct[]=[]
    // arr.push()
    // return this.Products.filter(p => p.categoryID == 3);
  
}
