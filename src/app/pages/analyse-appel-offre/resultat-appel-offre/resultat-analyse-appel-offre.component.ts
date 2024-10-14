import { Component, Input, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DetailsCardComponent } from '../../../shared/details-card/details-card.component';
import { DetailsCard } from '../../../core/models/model';
import { FormsModule } from '@angular/forms';
import { SplitStringPipe } from '../../../shared/pipes/split.pipe';

@Component({
  selector: 'app-resultat-ao',
  standalone: true,
  imports: [
    CardModule,
    TagModule,
    RatingModule,
    CommonModule,
    InputTextModule,
    FloatLabelModule,
    DetailsCardComponent,
    NgFor,
    NgForOf,
    FormsModule,
    SplitStringPipe,
  ],
  templateUrl: './resultat-analyse-appel-offre.component.html',
  styleUrl: './resultat-analyse-appel-offre.component.css',
})
export class ResultatAnalyseAOComponent implements OnInit {
  @Input() ao: any;

  attractivite: string = '';
  detailsData: DetailsCard[] = [];

  ngOnInit() {
    if (this.ao?.synthese_ao) {
      this.detailsData.push({
        icon: 'pi-thumbs-up',
        title: "Synthèse de l'appel d'offre :",
        subtitle: this.ao.synthese_ao,
      });
    }
    if (this.ao?.synthese_profil_recherche) {
      this.detailsData.push({
        icon: 'pi-chart-line',
        title: 'Synthèse du profil recherché :',
        subtitle: this.ao.synthese_profil_recherche,
      });
    }
  }
}
