import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { User } from 'src/app/models/user';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-admin-user-view',
  templateUrl: './admin-user-view.component.html',
  styleUrls: ['./admin-user-view.component.scss']
})
export class AdminUserViewComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['email', 'firstName', 'lastName', 'role', 'Edit'];
  dataSource = new MatTableDataSource<User>();
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private api: ApiService,
  ) {}

  ngOnInit(): void {
    this.api.getAllUsers().subscribe((info) => {
      this.dataSource.data = info.users || [];
      this.dataSource.sort = this.sort;
    });
  }

  // sortUsers(sort: Sort) {
  //   const data = this.users.slice();
  //   if (!sort.active || sort.direction === '') {
  //     this.users = data;
  //     return;
  //   }
  //   this.users = data.sort((a, b) => {
  //     const isAsc = sort.direction === 'asc';
  //     const isDesc = sort.direction === 'desc';
  //     switch (sort.active) {
  //       case 'Role':
  //         return compare(a.role, b.role, isAsc);
  //       default:
  //         return 0;
  //     }
  //   });
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  }

  // function compare(
  //   a: string | Number | undefined,
  //   b: string | Number | undefined,
  //   isAsc: boolean
  // ) {
  //   if (typeof a != 'undefined' && typeof b != 'undefined') {
  //     return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  //   } else {
  //     return 0;
  //   }
  // }

