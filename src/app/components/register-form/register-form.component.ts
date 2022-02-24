import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterUser } from 'src/app/_models/registerUser';
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
      password: ['', Validators.required]
    })

   }

  ngOnSubmit(): void {
    if (!this.registerForm.valid) {
      return
    }
    this.api.registerUser(this.registerForm.value).subscribe(data => {
      this.tokenService.saveEmail(this.registerForm.get('email')?.value)
      this.tokenService.saveToken(data.access_token)
      this.tokenService.saveRefreshToken(data.refresh_token)
      this.tokenService.saveUserRole(data.userRole)
      this.router.navigate(['/home'])
    })
  }

}
