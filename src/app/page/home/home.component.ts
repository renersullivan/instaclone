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
    this.router.navigateByUrl('reels');
    this.router.navigateByUrl('pesquisa');
    this.router.navigateByUrl('perfil');
    this.router.navigateByUrl('criar');
    this.router.navigateByUrl('notificacoes');
    this.router.navigateByUrl('explorar');
    this.router.navigateByUrl('mensagens');
  }
}
