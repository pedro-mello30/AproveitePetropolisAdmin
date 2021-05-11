import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ValidationContainerComponent} from './components/validation-container/validation-container.component';



@NgModule({
  declarations: [
    ValidationContainerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,


  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    ValidationContainerComponent
  ]
})
export class SharedModule { }
