import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ValidationContainerComponent} from './components/validation-container/validation-container.component';
import { IonicMaskDirective } from './shared/ionic-mask.directive';



@NgModule({
  declarations: [
    ValidationContainerComponent,
    IonicMaskDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,


  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    ValidationContainerComponent,
    IonicMaskDirective
  ]
})
export class SharedModule { }
