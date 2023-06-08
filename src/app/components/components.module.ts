import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObrasComponent } from './obras/obras.component';



@NgModule({
  declarations: [
    ObrasComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ObrasComponent
  ]
})
export class ComponentsModule { }
