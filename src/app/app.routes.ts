// src/app/app-routes.ts

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home', // Rota para a página inicial
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: 'quiz', // Rota para a página de quiz
    loadComponent: () => import('./quiz/quiz.page').then(m => m.QuizPage),
  },
  {
    path: 'sobre-nos', // Rota para a página sobre nós
    loadComponent: () => import('./sobre-nos/sobre-nos.page').then(m => m.SobreNosPage),
  },
  {
    path: '', // Redireciona a rota padrão (vazia) para 'home'
    redirectTo: 'home',
    pathMatch: 'full',
  },
];