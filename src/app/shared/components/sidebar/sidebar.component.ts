import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  icons = [
    {
      name: 'profile', 
      icon: 'account_circle',
      route: '', 
      tooltip: 'Profile (Not Implemented)'
    },
    {
      name: 'home', 
      icon: 'home', 
      route: '/', 
      tooltip: 'Home'
    },
    {
      name: 'courses', 
      icon: 'library_books', 
      route: '/courses', 
      tooltip: 'Courses'
    },
    {
      name: 'course creation',
      icon: 'library_add',
      route: '/course-creation',
      tooltip: 'Create Course'
    }
    // {
    //   name: 'inbox', 
    //   icon: 'inbox', 
    //   route: '', 
    //   tooltip: 'Inbox (Not Implemented)'
    // },
    // {
    //   name: 'settings', 
    //   icon: 'settings', 
    //   route: '', 
    //   tooltip: 'Settings (Not Implemented)'
    // },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
