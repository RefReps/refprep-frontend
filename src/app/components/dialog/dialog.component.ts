import {AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, ComponentRef, Inject, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnDestroy, AfterViewInit {
  @ViewChild('target', {read: ViewContainerRef}) viewContainerRef!: ViewContainerRef;

  componentRef!: ComponentRef<any>;
  factory: any

  constructor(
    private cd: ChangeDetectorRef,
    private resolver: ComponentFactoryResolver,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  
  ngAfterViewInit(): void {
    this.factory = this.resolver.resolveComponentFactory(this.data.component);
    this.componentRef = this.viewContainerRef.createComponent(this.factory);
    
    this.cd.detectChanges()
  }
  
  ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

}
