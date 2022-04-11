import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { User } from 'src/app/models/user';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogChangePasswordComponent } from '../dialog-change-password/dialog-change-password.component';
import { DialogService } from 'src/service/dialog.service';



@Component({
  selector: 'app-admin-user-view',
  templateUrl: './admin-user-view.component.html',
  styleUrls: ['./admin-user-view.component.scss']
})
export class AdminUserViewComponent implements OnInit {

  @ViewChild('menuTrigger')
  menuTrigger!: MatMenuTrigger; 
  users: User[] = [];
  displayedColumns: string[] = ['email', 'F.Name', 'L.Name', 'Role', 'Edit'];

  constructor(
    private api: ApiService,
    public dialogService: DialogService
  ) {}

  openDialog(user: User): void {
    this.dialogService.open(DialogChangePasswordComponent, { user })
  }

  ngOnInit(): void {
    this.api.getAllUsers().subscribe((info) => {
      this.users = info.users || []
    })
  }




  }

