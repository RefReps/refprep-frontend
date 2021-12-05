import { Component, Input, OnInit } from '@angular/core';
import { Module } from 'src/app/models/module';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-display-modules',
  templateUrl: './display-modules.component.html',
  styleUrls: ['./display-modules.component.css']
})
export class DisplayModulesComponent implements OnInit {

  @Input() sectionId: string = '';
  modules: Module[] = [];

  constructor(
    private Api: ApiService,
  ) { }

  ngOnInit(): void {
    this.getModules()
  }

  getModules(): void {
    this.Api.getModules(this.sectionId)
      .subscribe(info => this.modules = info)
  }

}
