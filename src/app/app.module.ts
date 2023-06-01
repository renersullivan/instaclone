import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PesquisaComponent } from './page/pesquisa/pesquisa.component';
import { ExplorarComponent } from './page/explorar/explorar.component';
import { ReelsComponent } from './page/reels/reels.component';
import { MensagensComponent } from './page/mensagens/mensagens.component';
import { NotificacoesComponent } from './page/notificacoes/notificacoes.component';
import { CriarComponent } from './page/criar/criar.component';
import { PerfilComponent } from './page/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    PesquisaComponent,
    ExplorarComponent,
    ReelsComponent,
    MensagensComponent,
    NotificacoesComponent,
    CriarComponent,
    PerfilComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
