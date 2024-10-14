import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/espace-cv/espace-cv.component').then(
        (m) => m.EspaceCvComponent
      ),
  },
  {
    path: 'espace-cv',
    loadComponent: () =>
      import('./pages/espace-cv/espace-cv.component').then(
        (m) => m.EspaceCvComponent
      ),
  },
  {
    path: 'analyse-cv',
    loadComponent: () =>
      import('./pages/analyse-cv/analyse-cv.component').then(
        (m) => m.AnalyseCvComponent
      ),
  },
  {
    path: 'espace-appel-offre',
    loadComponent: () =>
      import('./pages/espace-appel-offre/espace-appel-offre.component').then(
        (m) => m.EspaceAppelOffreComponent
      ),
  },
  {
    path: 'analyse-ao',
    loadComponent: () =>
      import('./pages/analyse-appel-offre/analyse-appel-offre.component').then(
        (m) => m.AnalyseAppelOffreComponent
      ),
  },
  {
    path: 'matching-cvao',
    loadComponent: () =>
      import('./pages/matching-cv-ao/matching-cv-ao.component').then(
        (m) => m.MatchingCvAoComponent
      ),
  },
  {
    path: 'matching-cvao-result',
    loadComponent: () =>
      import(
        './pages/matching-cv-ao/matching-result-page/matching-result-page.component'
      ).then((m) => m.MatchingResultPageComponent),
  },
  {
    path: 'synthese-graphique',
    loadComponent: () =>
      import('./pages/synthese-graphique/synthese-graphique.component').then(
        (m) => m.SyntheseGraphiqueComponent
      ),
  },
  { path: '**', redirectTo: '/espace-cv', pathMatch: 'full' },
];
