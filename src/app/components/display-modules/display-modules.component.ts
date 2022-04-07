import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Module } from 'src/app/models/course';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-display-modules',
  templateUrl: './display-modules.component.html',
  styleUrls: ['./display-modules.component.css']
})
export class DisplayModulesComponent implements OnInit {

  @Input() sectionId: string = '';
  @Input() modules: Module[] = [];


  constructor(
  ) { }

  ngOnInit(): void {
  }
}
