import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-content-add-tab-select',
  templateUrl: './content-add-tab-select.component.html',
  styleUrls: ['./content-add-tab-select.component.scss']
})
export class ContentAddTabSelectComponent {
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  

}
