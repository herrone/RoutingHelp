import { Component, OnInit } from '@angular/core';
import { Validators,FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
    
  submitted = false;
  
  ngOnInit() {
      this.loginForm = new FormGroup({
          'login': new FormControl('', Validators.required),
          'password': new FormControl('', Validators.required)
      });
  }
  
  onSubmit() { 
      this.submitted = true;
      alert(JSON.stringify(this.loginForm.value));
  }
}