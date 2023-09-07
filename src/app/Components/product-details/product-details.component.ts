import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/Product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  id:number = 0;

  constructor(
    private prdSrev: ProductService, 
    private router: Router, 
    private activeRoute:ActivatedRoute
    ){
    this.activeRoute.params.subscribe(data=>{
      console.log(data)
      this.id = data["Pid"] as number

    })
  }
  prev(){
    this.router.navigate(["/user/product-details", this.id--])
  }
  next(){
    this.router.navigate(["/user/product-details", this.id++])
  }
  
}
