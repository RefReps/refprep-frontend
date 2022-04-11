import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { TokenService } from 'src/app/_services/token.service';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-dialog-change-email',
  templateUrl: './dialog-change-email.component.html',
  styleUrls: ['./dialog-change-email.component.scss']
})
export class DialogChangeEmailComponent implements OnInit {
  email: string = '';
  user: User = {};
  userId: string = '';
  activeUser: string = '';

  constructor(
    private api: ApiService,
    public token: TokenService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.activeUser = this.token.getEmail();
    this.userId = this.data.data.user._id;
    this.user = this.data.data.user;
  }

  onSubmit(email: string) {
    this.api.updateUserEmail(this.userId, email).subscribe(
      (data) => {
        window.location.reload();
      })
    }
}
