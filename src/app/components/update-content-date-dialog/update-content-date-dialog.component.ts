import { FormControl } from '@angular/forms';
import { ApiService } from 'src/service/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-content-date-dialog',
  templateUrl: './update-content-date-dialog.component.html',
  styleUrls: ['./update-content-date-dialog.component.scss'],
})
export class UpdateContentDateDialogComponent implements OnInit {
  contentDropDate = new FormControl(new Date());
  hours: number = 12;
  minutes: number = 0;
  isAm: boolean = true;

  constructor(
    private Api: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  toggleIsAm(): void {
    this.isAm = !this.isAm;
  }

  changeDropDate(date: string): void {
    this.contentDropDate.setValue(new Date(date))
    console.log(this.contentDropDate.value)
  }

  submitDropDate(): void {
    const day = new Date(this.contentDropDate.value);
    const date = new Date(
      day.getFullYear(),
      day.getMonth(),
      day.getDate(),
      this.isAm ? this.hours % 12 : (this.hours % 12) + 12,
      this.minutes
    );
    // console.log(date.getTime())
    if (this.data.data.contentId) {
      this.Api.updateContentDropDate(
        this.data.data.contentId,
        date
      ).subscribe((res) => {
        window.location.reload();
      });
    }
  }
}
