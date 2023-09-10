import { Component } from '@angular/core';
import { ProductService } from 'src/app/Services/Product.service';
import { IProduct } from 'src/app/ViewModels/IProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products:IProduct[];
  constructor(private PrdServ:ProductService) {
    this.products=[]
  }
}
