import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/Product.service';
import { IProduct } from 'src/app/ViewModels/IProduct';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:IProduct[];
  constructor(private PrdServ:ProductService) {
    this.products=[]
   }

  ngOnInit() {
    this.PrdServ.getAll().subscribe({
      next:(response)=>{
        console.log(response.data)
        this.products = response.data as IProduct[]

      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

}
