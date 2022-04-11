import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { User } from 'src/app/models/user';



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




  }

