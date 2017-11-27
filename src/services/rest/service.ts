import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WebService {

    constructor(private http: Http) { }

    consultaServidor() {
        var url = 'https://gs-sts-cloud-foundry-deployment-angoti.cfapps.io/categorias/';
        //var url = 'https://jsonplaceholder.typicode.com/posts';
        //var url = 'https://api.themoviedb.org/3/search/movie?query=&query=' + encodeURI('aaa') + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
        var teste = this.http.get(url);
        var response = teste.map(res => res.json());
        return response;
    }

    postProduto(data) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        console.log(data);
        var url = 'https://gs-sts-cloud-foundry-deployment-angoti.cfapps.io/produtos';
        var myData = JSON.stringify({ nome: data.nome });
        console.log('mydata',myData);
        return this.http.post(url, myData, {headers: headers});
    }
}