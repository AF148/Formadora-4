// src/app/home/home.page.ts

import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // <-- IMPORTANTE: Adicionar o IonicModule aqui
import { RouterLink } from '@angular/router'; // <-- Importar RouterLink se necessário para routerLink

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  // CORREÇÃO: Adicione IonicModule e RouterLink aos imports
  imports: [IonicModule, RouterLink], 
})
export class HomePage {
  constructor() {}
}