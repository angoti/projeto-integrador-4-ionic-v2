import { Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CloudFoundryProvider {
  url = "/cloudfoundry"
  constructor(public http: HttpClient, private _platform: Platform) {
    if (this._platform.is("cordova")) {
      this.url = "https://gs-sts-cloud-foundry-deployment-angoti.cfapps.io";
    }
  }

  postProduto(data) {
    var headers = new HttpHeaders('Content-Type:application/json; charset=UTF-8');
    var myData = JSON.stringify({ nome: data.nome });
    return this.http.post(this.url + '/produtos', myData, { headers: headers });
  }

  consultaServidor() {
    return this.http.get(this.url+'/categorias');
  }

}
