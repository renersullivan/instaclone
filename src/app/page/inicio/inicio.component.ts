import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  home: any;
  constructor(private router: Router) {}

  ngOnInit() {
    console.log('chegou aki');
  }
  public openPage() {
    console.log('onpenPage');
    this.router.navigateByUrl('home');
  }
}
