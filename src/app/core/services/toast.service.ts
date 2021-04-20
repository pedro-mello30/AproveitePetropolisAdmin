import { Injectable } from '@angular/core';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toast: ToastController
  ) { }

  async showSuccess(message: string){
    const toastResult = await this.toast.create({
      message: message,
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toastResult.present();
  }

  async showError(message: string){
    const toastResult = await this.toast.create({
      message: message,
      duration: 2000,
      color: 'danger',
      position: 'top'
    });
    toastResult.present();
  }
}
