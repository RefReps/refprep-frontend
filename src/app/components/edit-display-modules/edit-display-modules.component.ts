import { Component, Input, OnInit } from '@angular/core';
import { Module } from 'src/app/models/module';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-edit-display-modules',
  templateUrl: './edit-display-modules.component.html',
  styleUrls: ['./edit-display-modules.component.css']
})
export class EditDisplayModulesComponent implements OnInit {

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
