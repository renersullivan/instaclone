import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { InicioComponent } from './page/inicio/inicio.component';
import { PaginaInicialComponent } from './page/pagina-inicial/pagina-inicial.component';
import { ExplorarComponent } from './page/explorar/explorar.component';
import { CriarComponent } from './page/criar/criar.component';
import { MensagensComponent } from './page/mensagens/mensagens.component';
import { NotificacoesComponent } from './page/notificacoes/notificacoes.component';
import { PerfilComponent } from './page/perfil/perfil.component';
import { PesquisaComponent } from './page/pesquisa/pesquisa.component';
import { ReelsComponent } from './page/reels/reels.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'pageinicial',
    component: PaginaInicialComponent,
  },
  {
    path: 'explorar',
    component: ExplorarComponent,
  },
  {
    path: 'criar',
    component: CriarComponent,
  },
  {
    path: 'mensagens',
    component: MensagensComponent,
  },
  {
    path: 'notificacoes',
    component: NotificacoesComponent,
  },
  {
    path: 'perfil',
    component: PerfilComponent,
  },
  {
    path: 'pesquisa',
    component: PesquisaComponent,
  },
  {
    path: 'reels',
    component: ReelsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
