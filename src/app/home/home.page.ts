import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
// importing service
import { memoryboxService } from '../services/memorybox.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage { 

  constructor(
    public alertController: AlertController,
    // create an instance of the service
    public memoryboxService: memoryboxService
  ) { }

  //Gets Memory
  memoryBox = this.memoryboxService.memoryBox();

  //Removes the Memory
  removeMemory(entry) {
    this.memoryBox = this.memoryboxService.remove(entry);
    }
 
  //Memory Addup Alert
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Memory Addup!',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Title'
        },
        {
          name: 'content',
          type: 'textarea',
          placeholder: 'Content'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            //console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: async data => {

            //If the fields are not filled alerts to fill them
            if((data.title && data.content) == ""){
                const errorAlert = await this.alertController.create({
                  cssClass: 'my-custom-class',
                  message: 'Please do fill the Information...',
                  buttons: [{
                    text: 'Ok',
                    handler: () => {
                    this.presentAlertPrompt();
                    }
                  }]
                });
                errorAlert.present();
            }

            //adds Memory
            else{
                this.memoryboxService.addMemory(data);
              }
          }
        }
      ]
    });

    await alert.present();
  }
}
