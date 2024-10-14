import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { DetailsCardComponent } from '../../shared/details-card/details-card.component';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ResultatAnalyseCvComponent } from './resultat-analyse-cv/resultat-analyse-cv.component';
import { AoCardComponent } from '../../shared/ao-card/ao-card.component';
import { Router } from '@angular/router';
import { TableModule } from 'primeng/table';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-analyse-cv',
  standalone: true,
  imports: [
    CardModule,
    TagModule,
    RatingModule,
    DetailsCardComponent,
    CommonModule,
    InputTextModule,
    FloatLabelModule,
    ResultatAnalyseCvComponent,
    AoCardComponent,
    TableModule,
    Button
  ],
  templateUrl: './analyse-cv.component.html',
  styleUrl: './analyse-cv.component.css',
})
export class AnalyseCvComponent implements OnInit {
  candidate: any;
  File_list: any[] = [];

  constructor(private router: Router) {
    this.candidate = this.router.getCurrentNavigation()?.extras?.state;
  }

  ngOnInit(): void {}

  navigateBack() {
    this.router.navigate(['espace-cv']);
  }
}
