import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/Auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  loginForm: FormGroup;


  constructor(private fb:FormBuilder,private router:Router, private loginService:LoginService){
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }
  
  ngOnInit() {
     
  }
  
  onSubmit() { 
    if(this.loginForm.invalid){
        this.loginForm.markAsTouched();
    }
    this.loginService.login(this.loginForm.value).subscribe({
      next:(Response)=>{
        if(Response){
          localStorage.setItem('token',Response.token);
          this.router.navigate(['/ListeSalle']);
        }
      }
    })
  }

}
