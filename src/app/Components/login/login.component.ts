import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isloading :boolean
  constructor(private router:Router) {
    this.isloading= true
   }

  ngOnInit() {
  }

  Send(){
    //call  api
    // success
      /// go to home
      this.router.navigateByUrl('/user')
    //fail
  }

}
