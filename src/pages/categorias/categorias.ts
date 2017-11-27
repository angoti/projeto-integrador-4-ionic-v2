import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CloudFoundryProvider } from './../../providers/cloud-foundry/cloud-foundry';

import { ProdutosDeUmaCategoriaPage } from './../produtos-de-uma-categoria/produtos-de-uma-categoria';

@Component({
	selector: 'page-list',
	templateUrl: 'categorias.html'
})
export class CategoriasPage {

	categorias: Array<any>;

	constructor(
		public navCtrl: NavController, 
		private cloudFoundryProvider: CloudFoundryProvider) {
	}

	ionViewDidLoad() {
		this.cloudFoundryProvider.consultaServidor().subscribe(
			data => {
				this.categorias = data;
				console.log("retorno: ", data);
			},
			err => {
				console.log("Erro: ", err);
			},
			() => console.log('consulta completa')
		);
	}

	exibeProdutosDeUmaCategoria(event, categoria) {
		console.log(categoria);
		this.navCtrl.push(ProdutosDeUmaCategoriaPage, {
			categoria: categoria
		});
	}

}