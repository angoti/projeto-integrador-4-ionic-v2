import { ProdutosDeUmaCategoriaPage } from './../pages/produtos-de-uma-categoria/produtos-de-uma-categoria';
import { CategoriasPage } from './../pages/categorias/categorias';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HomePage } from './../pages/home/home';
import { MyApp } from './app.component';
import { CadastroProdutoPage } from './../pages/cadastro-produto/cadastro-produto';

import { WebService } from './../services/rest/service';
import { CloudFoundryProvider } from '../providers/cloud-foundry/cloud-foundry';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroProdutoPage,
    CategoriasPage,
    ProdutosDeUmaCategoriaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroProdutoPage,
    CategoriasPage,
    ProdutosDeUmaCategoriaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WebService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CloudFoundryProvider
  ]
})
export class AppModule {}
