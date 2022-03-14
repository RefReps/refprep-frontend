import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-update-section-dialog',
  templateUrl: './update-section-dialog.component.html',
  styleUrls: ['./update-section-dialog.component.css']
})
export class UpdateSectionDialogComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }




}
