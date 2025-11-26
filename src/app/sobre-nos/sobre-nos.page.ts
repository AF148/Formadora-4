// src/app/sobre-nos/sobre-nos.page.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// IMPORTANTE: Adicionar o IonicModule aqui
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; 

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.page.html',
  styleUrls: ['./sobre-nos.page.scss'],
  standalone: true,
  // CORREÇÃO: Adicione IonicModule aos imports
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SobreNosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}