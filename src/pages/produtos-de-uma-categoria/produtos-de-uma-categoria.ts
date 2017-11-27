import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-info',
  templateUrl: 'produtos-de-uma-categoria.html',
})
export class ProdutosDeUmaCategoriaPage {

	categoria: {};	

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.categoria = navParams.get('categoria');
	}

}
