import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl = '/';
  error = '';

  isLoadingResults = false;

  constructor (
    private authService: AuthenticationService,
    private authServ: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    ) {
      if (this.authService.userValue) {
        this.router.navigate(['/'])
      }
    }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'
  }

  get f() { return this.loginForm.controls }

  onSubmit() {
    this.isLoadingResults = true
    this.authService.login(this.f.email.value, this.f.password.value)
      .subscribe(() => {
        this.isLoadingResults = false
        this.router.navigate(['/home']).then(_ => console.log('You are logged in'))
      }, (err: any) => {
        console.log(err)
        this.isLoadingResults = false
      }
      )
    // this.submitted = true

    // if (this.loginForm.invalid) {
    //   return
    // }

    // this.loading = true
    // this.authService.login(this.f.email.value, this.f.password.value)
    //     .pipe(first())
    //     .subscribe(resp => {
    //       console.log(resp)
    //       if (resp.headers.get('Authorization')) {
    //         localStorage.setItem('AUTH-REFREP', resp.headers.get('Authorization'))
    //         this.router.navigate([this.returnUrl])
    //       }
    //     })
    //     .subscribe({
    //       next: () => {
    //         this.router.navigate([this.returnUrl])
    //       },
    //       error: error => {
    //         this.error = error
    //         this.loading = false
    //       }
    //     })
  }

}
