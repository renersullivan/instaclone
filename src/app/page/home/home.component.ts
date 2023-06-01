import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  public openHomePage() {
    this.router.navigateByUrl('pageinicial');
  }
  public openReels() {
    this.router.navigateByUrl('reels');
  }

  public openPesquisa() {
    this.router.navigateByUrl('pesquisa');
  }

  public openPerfil() {
    this.router.navigateByUrl('perfil');
  }

  public openCriar() {
    this.router.navigateByUrl('criar');
  }

  public openNotificacoes() {
    this.router.navigateByUrl('notificacoes');
  }

  public openExplorar() {
    this.router.navigateByUrl('explorar');
  }

  public openMensagens() {
    this.router.navigateByUrl('mensagens');
  }
}
