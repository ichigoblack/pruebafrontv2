import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  miFormulario!:FormGroup;

  

  ngOnInit(): void {
    this.miFormulario = this.fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    });
    this.authService.logout();
  }

  constructor(private fb:FormBuilder,
    private router:Router,
    private authService:AuthService
) { }

  login(){
    if(this.miFormulario.value.email != 'admin')
      return;
    
    if(this.miFormulario.value.password != 'admin')
      return;

    this.authService.login('admin');
    this.router.navigateByUrl('');
    

  }

  


}
