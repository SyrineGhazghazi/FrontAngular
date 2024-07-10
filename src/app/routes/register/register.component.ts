import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/Auth/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  inscriptionForm:FormGroup;
  constructor (private fb: FormBuilder,private login:LoginService,private router:Router) 
  {
    this.inscriptionForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
      email: ['',Validators.required]
    })
  }
  onSubmit() {
   if(this.inscriptionForm.invalid){
    this.inscriptionForm.markAllAsTouched();
    return;
   }

   this.login.register(this.inscriptionForm.value).subscribe({
    next:(Response)=>{
      console.log("res",Response);
      
      if (Response){
        this.router.navigate(['/login']);
      }
    }
   })

    }
}
