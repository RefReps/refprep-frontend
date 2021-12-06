import { ComponentType } from '@angular/cdk/portal';
import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  private conf = {autoFocus: true}

  private mediumConf = {height: 'auto', width: 'auto', data: {}, ...this.conf}

  public open<T>(component: ComponentType<T> | TemplateRef<T>, data: any) {
    this.mediumConf['data'] = {component, data}
    const conf = this.mediumConf
    return this.dialog.open(DialogComponent, conf)
  }

  public error<T>(data: any) {
    //TODO: add error dialog in components
    // return this.dialog.open(AlertDialogComponent, {panelClass: 'alert-panel', data: data});
  }
}
