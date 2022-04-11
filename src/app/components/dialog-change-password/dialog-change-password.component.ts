import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { TokenService } from 'src/app/_services/token.service';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-dialog-change-password',
  templateUrl: './dialog-change-password.component.html',
  styleUrls: ['./dialog-change-password.component.scss']
})
export class DialogChangePasswordComponent implements OnInit {
  password: string = '';
  confirmPassword: string = '';
  hide = true;
  match = true;
  user: User = {};
  userId: string = '';
  activeUser: string = '';

  constructor(
    private api: ApiService,
    public token: TokenService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 
  }


  ngOnInit(): void {
    this.userId = this.data.data.user._id;
    this.user = this.data.data.user;
    this.activeUser = this.token.getEmail();
  }
  
onSubmit() {
  if (this.password === this.confirmPassword) {
    this.updatePassword(this.password);
    return this.match = true;
  }
  else {
    return this.match = false;
  }
}

  updatePassword(password: string){
    this.api.updateUserPassword(this.userId, password).subscribe(
      (data) => {
        window.location.reload();
      })
    }
}
