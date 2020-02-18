import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LibroPage } from '../libro/libro.page';


@Component({
  selector: 'app-sistemas',
  templateUrl: './sistemas.page.html',
  styleUrls: ['./sistemas.page.scss'],
})
export class SistemasPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  /*async presentAlertSistemas() {
    const alert = await this.alertController.create({
      header: 'El Gran Libro de Android Avanzado',
      subHeader: 'Marcombo S.A',
      message: 'Diploma de Especialización en Desarrollo de Aplicaciones para Android',
      buttons: ['OK']
    });

    await alert.present();
  }*/

}
