import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/Account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isloading :boolean
  loginForm:FormGroup
  constructor(
    private router:Router, 
    private builder:FormBuilder,
    private AccServ:AccountService) {
    this.isloading= true
    this.loginForm = this.builder.group({
      email:["", [Validators.required, Validators.pattern(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm)]],
      password:["",[Validators.required,Validators.minLength(8)]],
    })
   }

  ngOnInit() {
  }

  Send(){
    //call api
    this.AccServ.login(this.loginForm.value)
    .subscribe({
      next:(response)=>{
        if(response.success== true)
        {
          localStorage.setItem('token',response.data.token)
          this.router.navigateByUrl('/user')
        }
        else{
          alert(response.message)
        }

      },
      error:(err)=>{
        console.log(err)
      }
    })
    // success
      /// go to home
      
    //fail
  }

}
