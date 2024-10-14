import { Component, Input, OnInit } from '@angular/core';
import { DetailsCard, Matching } from '../../../core/models/model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { DetailsCardComponent } from '../../../shared/details-card/details-card.component';
import { AnalyseCandidatService } from '../../../core/services/analyse-cv.service';
import { SplitStringPipe } from '../../../shared/pipes/split.pipe';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-matching-result',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    TagModule,
    CommonModule,
    DividerModule,
    DetailsCardComponent,
    SplitStringPipe,
    RatingModule,
    FormsModule,
  ],
  templateUrl: './matching-result.component.html',
  styleUrl: './matching-result.component.css',
})
export class MatchingResultComponent implements OnInit {
  @Input() matching: Matching | undefined;
  justifications: DetailsCard | any;
  recommandations: DetailsCard | any;
  cvList: any;
  selectedCv: any;
  attractivite: any;
  detailsData: DetailsCard[] = [];

  constructor(private cvService: AnalyseCandidatService) {}

  ngOnInit(): void {
    this.cvService.getAllAnalysedCandidats().subscribe((data) => {

      this.cvList = data;

      this.selectedCv = this.cvList.find((cv: any) =>
        cv.id.includes(this.matching?.candidat)
      );

      this.selectedCv.metier_fonc = this.selectedCv.metier_fonc
        ? this.selectedCv.metier_fonc
        : [];
      this.selectedCv.experience = this.selectedCv.experience
        ? this.selectedCv.experience.match(/[0-9]+/g)?.[0]
        : undefined;
      this.selectedCv.attractivite = this.selectedCv.attractivite
        ? this.selectedCv.attractivite.match(/[0-9]+/g)?.[0]
        : '0';
      this.attractivite = this.selectedCv.attractivite;
      this.selectedCv.techno_majeures = this.selectedCv.techno_majeures
        ? this.selectedCv.techno_majeures
        : [];
      this.selectedCv.techno_mineures = this.selectedCv.techno_mineures
        ? this.selectedCv.techno_mineures
        : [];

      if (this.selectedCv?.points_forts) {
        this.detailsData.push({
          icon: 'pi-thumbs-up',
          title: 'Points forts :',
          subtitle: this.selectedCv.points_forts,
        });
      }
      if (this.selectedCv?.points_amelioration) {
        this.detailsData.push({
          icon: 'pi-chart-line',
          title: 'Points d’amélioration :',
          subtitle: this.selectedCv.points_amelioration,
        });
      }
      if (this.selectedCv?.recommandations) {
        this.detailsData.push({
          icon: 'pi-list-check',
          title: 'Recommandations :',
          subtitle: this.selectedCv.recommandations,
        });
      }
    });

    if (this.matching?.justifications) {
      this.justifications = {
        icon: 'pi pi-exclamation-circle',
        title: 'Compte-rendu',
        subtitle: this.matching.justifications,
      };
    }
    if (this.matching?.recommandations) {
      this.recommandations = {
        icon: 'pi pi-exclamation-circle',
        title: 'Recommandations',
        subtitle: this.matching.recommandations,
      };
    }
  }
}
