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
  selector: 'app-resultat-analyse-cv',
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
    SplitStringPipe
  ],
  templateUrl: './resultat-analyse-cv.component.html',
  styleUrl: './resultat-analyse-cv.component.css',
})
export class ResultatAnalyseCvComponent implements OnInit {
  @Input() candidate: any;

  attractivite: string = '';
  detailsData: DetailsCard[] = [];

  ngOnInit() {
    this.attractivite = this.candidate?.attractivite
      ? this.candidate.attractivite
      : '';
    if (this.candidate?.points_forts) {
      this.detailsData.push({
        icon: 'pi-thumbs-up',
        title: 'Points forts :',
        subtitle: this.candidate.points_forts,
      });
    }
    if (this.candidate?.points_amélioration) {
      this.detailsData.push({
        icon: 'pi-chart-line',
        title: 'Points d’amélioration :',
        subtitle: this.candidate.points_amélioration,
      });
    }
    if (this.candidate?.recommandations) {
      this.detailsData.push({
        icon: 'pi-list-check',
        title: 'Recommandations :',
        subtitle: this.candidate.recommandations,
      });
    }
  }
}
