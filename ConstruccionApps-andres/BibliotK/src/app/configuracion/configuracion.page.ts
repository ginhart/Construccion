import { Component, OnInit } from '@angular/core';
import { AlertController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})

export class ConfiguracionPage implements OnInit {

  constructor(public alertController: AlertController, 
    public actionSheetController:ActionSheetController) { }

  public idioma : string = "Español"; //variable que contiene el idioma
  public nombre : string = "Usuario"; //variable que contiene el nombre de usuario
  public pass : string = "12345"; //variable que contiene el password del usuario

  ngOnInit() {
  }

  //metodo que permite al usuario cambiar de nombre
  async cambiarNombre(){
      const alert = await this.alertController.create({
        header: 'Cambiar nombre',
        inputs: [
          {
            name: 'nombre',
            type: 'text',
            value: this.nombre,
            placeholder: this.nombre
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Ok',
            handler: (data) => {
              this.nombre = data.nombre;
              console.log('Confirm ' + this.nombre);
            }
          }
        ]
      });
  
      await alert.present();
    
  }

  //metodo que permite al usuario cambiar su password
  async cambiarPassword(){
    const alert = await this.alertController.create({
      header: 'Cambiar contraseña',
      inputs: [
        {
          name: 'newPass',
          type: 'text',
          placeholder: "new password",
          min: 5,
          max: 18
        },
        {
          name: 'newPassConfirm',
          type: 'text',
          placeholder: "new password confirmed",
          min: 5,
          max: 18
        },        
        {
          name: 'oldPass',
          type: 'text',
          placeholder: "old password",
          min: 5,
          max: 18
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            if(data.newPass === data.newPassConfirm && data.oldPass === this.pass){
              this.pass = data.newPass;
              console.log("Confirmed new password: " + data.newPass);
            }else{
              this.alertError();
            }
          }
        }
      ]
    });
    await alert.present();
  }

  //Alerta que se muestra cuando no se pudo guardar el password
  async alertError(){
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'La contraseña no ha sido guardada',
      buttons: ['OK']
    });

    await alert.present();
  }

  //metodo que permite el cambio de idioma
  async cambiarIdioma() {
    const alert = await this.alertController.create({
      header: 'Radio',
      inputs: [
        {
          name: 'español',
          type: 'radio',
          label: 'Español',
          value: 'Español',
          checked: true
        },
        {
          name: 'english',
          type: 'radio',
          label: 'English',
          value: 'English'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            this.idioma = "" + data;
            console.log('Confirm ' + this.idioma);
          }
        }
      ]
    });

    await alert.present();
  }

  //metodo que permite el cambio de tamaño de fuente
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Tamaño',
      buttons: [{
        text: 'Pequeño',
        handler: () => {
          console.log('Pequeño clicked');
        }
      }, {
        text: 'Mediano',
        handler: () => {
          console.log('Mediano clicked');
        }
      },{
        text: 'Grande',
        handler: () => {
          console.log('Grande clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}