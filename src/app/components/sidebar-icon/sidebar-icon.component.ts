import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-icon',
  templateUrl: './sidebar-icon.component.html',
  styleUrls: ['./sidebar-icon.component.css']
})
export class SidebarIconComponent implements OnInit {
  @Input() icon = {name: '', icon: '', route: '', tooltip: ''}

  constructor() { }

  ngOnInit(): void {
  }

}
