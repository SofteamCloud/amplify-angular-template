import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ResultatAnalyseAOComponent } from './resultat-appel-offre/resultat-analyse-appel-offre.component';

@Component({
  selector: 'app-analyse-appel-offre',
  standalone: true,
  imports: [CardModule, ResultatAnalyseAOComponent],
  templateUrl: './analyse-appel-offre.component.html',
  styleUrl: './analyse-appel-offre.component.css'
})
export class AnalyseAppelOffreComponent {
  ao: any;

  constructor(private router: Router) {
    this.ao = this.router.getCurrentNavigation()?.extras?.state;
  }

  ngOnInit(): void {}

  navigateBack() {
    this.router.navigate(['espace-appel-offre']);
  }
}
