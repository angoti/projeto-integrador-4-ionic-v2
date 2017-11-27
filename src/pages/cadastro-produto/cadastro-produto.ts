import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CloudFoundryProvider } from './../../providers/cloud-foundry/cloud-foundry';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@IonicPage()
@Component({
  selector: 'page-cadastro-produto',
  templateUrl: 'cadastro-produto.html',
  providers: [CloudFoundryProvider]
})
export class CadastroProdutoPage {

  data: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private cloudFoundryProvider: CloudFoundryProvider,
    private alertCtrl: AlertController) {

    this.data.nome = '';
  }

  submit() {
    console.log(this.data);
    this.cloudFoundryProvider.postProduto(this.data).subscribe(data => {
      console.log('resposta', data);
    }, error => {
      if (error['status'] == 201)
        this.showAlert();
      else
        console.log("Oooops!", error);
    });
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Respota',
      subTitle: 'Produto criado com sucesso!',
      buttons: ['OK']
    });
    alert.present();
  }

}
