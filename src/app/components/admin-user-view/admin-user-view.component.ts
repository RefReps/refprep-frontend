import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { User } from 'src/app/models/user';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogChangePasswordComponent } from '../dialog-change-password/dialog-change-password.component';
import { DialogService } from 'src/service/dialog.service';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogChangeEmailComponent } from '../dialog-change-email/dialog-change-email.component';
import { DialogChangeNameComponent } from '../dialog-change-name/dialog-change-name.component';
import { DialogChangeRoleComponent } from '../dialog-change-role/dialog-change-role.component';
import { TokenService } from 'src/app/_services/token.service';



@Component({
  selector: 'app-admin-user-view',
  templateUrl: './admin-user-view.component.html',
  styleUrls: ['./admin-user-view.component.scss']
})
export class AdminUserViewComponent implements OnInit {

  @ViewChild('menuTrigger')
  menuTrigger!: MatMenuTrigger; 
  users: User[] = [];
  activeUser: string = '';
  displayedColumns: string[] = ['email', 'firstName', 'lastName', 'role', 'Edit'];
  dataSource = new MatTableDataSource<User>();
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private api: ApiService,
    public dialogService: DialogService,
    public token: TokenService,
  ) {}

  ngOnInit(): void {
    this.activeUser = this.token.getEmail();
    this.api.getAllUsers().subscribe((info) => {
      this.dataSource.data = info.users || [];
      this.dataSource.sort = this.sort;
    });
  }

  openUpdatePasswordDialog(user: User): void {
    this.dialogService.open(DialogChangePasswordComponent, { user })
  }

  openUpdateEmailDialog(user: User): void {
    this.dialogService.open(DialogChangeEmailComponent, { user })
  }

  openUpdateNameDialog(user: User): void {
    this.dialogService.open(DialogChangeNameComponent, { user })
  }

  openUpdateRoleDialog(user: User): void {
    this.dialogService.open(DialogChangeRoleComponent, { user })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  }

