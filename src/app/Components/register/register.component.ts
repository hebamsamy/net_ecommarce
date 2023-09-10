import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/Account.service';
import { APIResult } from 'src/app/ViewModels/apiResult';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm:FormGroup
  //FormGroup => from tag
  //FormControl => input tag
  constructor(private builder:FormBuilder,private accServ:AccountService,private router:Router) {
    this.RegisterForm = this.builder.group({
      name:["",[Validators.required,Validators.minLength(3)]],
      password:["",[Validators.required,Validators.minLength(8)]],
      phoneNumber:['', [Validators.required,Validators.minLength(11) ]],
      email:["", [Validators.required, Validators.pattern(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm)]]
    })

  }
   register(){
    console.log(this.RegisterForm.value)
    this.accServ.register(this.RegisterForm.value)
    .subscribe({
      next:(response)=>{
        console.log(response)
        if(response.success == true){
          this.router.navigateByUrl("/login")
        }
        else{
          alert(response.message)
        }
      },
      error:(err)=>{
        console.log(err)

      }
    })

   }

  ngOnInit() {
  }

}
