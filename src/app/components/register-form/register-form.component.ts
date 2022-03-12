import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/_services/token.service';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  registerForm: FormGroup;
  errors: any = {}
  error = ''
  match = true;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private tokenService: TokenService,
    private api: ApiService,
    private router: Router,
  ) {
    if (tokenService.getToken()) {
      router.navigate(['/'])
    }
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordCheck: ['', Validators.required]
    })
   }

  checkPasswordMatch() {
    if (this.registerForm.get('password')?.value != this.registerForm.get('passwordCheck')?.value) {
      return this.match = false;
    }
    else {
      return this.match = true;
    }
  }

  ngOnSubmit(): void {
    this.checkPasswordMatch();
    if (!this.registerForm.valid) {
      return
    }
    if (this.match == true) {
      this.api.registerUser(this.registerForm.value).subscribe(data => {
        this.tokenService.saveEmail(this.registerForm.get('email')?.value)
        this.tokenService.saveToken(data.access_token)
        this.tokenService.saveRefreshToken(data.refresh_token)
        this.tokenService.saveUserRole(data.userRole)
        this.router.navigate(['/home'])
    })
  }
  }
}

