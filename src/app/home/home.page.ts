import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddPageModule } from '../add/add.module';
import { AddPage } from '../add/add.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
      public modal : ModalController
  ) {}

  //Add up Modal page 
  addup(){
    this.modal.create({component: AddPage}).then((ModalElement)=>{
      ModalElement.present();
    })
  }
}
