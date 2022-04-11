import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { User } from 'src/app/models/user';
import { Sort } from '@angular/material/sort';



@Component({
  selector: 'app-admin-user-view',
  templateUrl: './admin-user-view.component.html',
  styleUrls: ['./admin-user-view.component.scss']
})
export class AdminUserViewComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['email', 'F.Name', 'L.Name', 'Role', 'Edit'];
  constructor(
    private api: ApiService,
  ) {
   
  }

  ngOnInit(): void {
    this.api.getAllUsers().subscribe((info) => {
      this.users = info.users || []
    })
  }

  sortUsers(sort: Sort) {
    const data = this.users.slice();
    if (!sort.active || sort.direction === '') {
      this.users = data;
      return;
    }
    this.users = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      const isDesc = sort.direction === 'desc';
      switch (sort.active) {
        case 'Role':
          return compare(a.role, b.role, isAsc);
        default:
          return 0;
      }
    });
  }
  }

  function compare(
    a: string | Number | undefined,
    b: string | Number | undefined,
    isAsc: boolean
  ) {
    if (typeof a != 'undefined' && typeof b != 'undefined') {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    } else {
      return 0;
    }
  }

