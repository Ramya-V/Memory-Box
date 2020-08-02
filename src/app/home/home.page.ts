import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { memory } from '../schema/memory';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  //Memory Entry
  memoryBox: Array<memory> = [
    {id: 1, 
     title: "LIFE",
     content:"Life is a Mystery",
    },
  ];

  constructor(
    public alertController: AlertController
  ) {}

  // Removes the Memory
  removeMemory(entry: memory) {
    this.memoryBox = this.memoryBox.filter((element) => {
      return element["id"] !== entry["id"];
    });
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
             //last entry in the array
              var lastEntryId = this.memoryBox[(this.memoryBox.length)-1]["id"];

              // adds a entry 
              this.memoryBox.push({ id: lastEntryId + 1, title: data.title, content: data.content });

              }
            //console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}
