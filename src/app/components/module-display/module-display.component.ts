import { Component, Input, OnInit } from '@angular/core';
import { SectionsInfo } from 'src/app/models/sections-info';

@Component({
  selector: 'app-module-display',
  templateUrl: './module-display.component.html',
  styleUrls: ['./module-display.component.css']
})
export class ModuleDisplayComponent implements OnInit {

  @Input() sectionsList: SectionsInfo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
