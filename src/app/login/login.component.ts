import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router) { }
  public loginForm ! :FormGroup;

  ngOnInit(): void {
    this.loginForm=this.formbuilder.group({
      email:[''],
      password:[''],
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/signupUsers").subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password

      });
      if(user){
        alert("login successfull");
        this.loginForm.reset();
        this.router.navigate(['/appcomponent']);


      }
      else{
        alert("login failed");

      }
  
    });
    
  }



}
