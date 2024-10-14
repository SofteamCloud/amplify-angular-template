import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { AoService } from '../../../core/services/ao.service';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { ChipModule } from 'primeng/chip';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { AnalyseCandidatService } from '../../../core/services/analyse-cv.service';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-radar',
  standalone: true,
  imports: [
    CardModule,
    DropdownModule,
    FormsModule,
    MultiSelectModule,
    ChipModule,
    CommonModule,
    DividerModule,
    ButtonModule,
    ChartModule,
  ],
  templateUrl: './radar.component.html',
  styleUrl: './radar.component.css',
})
export class RadarComponent {
  aoList: any;
  selectedAo: any;
  candidatesList: any;
  selectedCandidates: any;
  data: any;

  options: any;

  constructor(
    private aoService: AoService,
    private candidatesService: AnalyseCandidatService
  ) {}

  ngOnInit() {
    this.aoService.getListFromApi().subscribe((data) => {
      this.aoList = data;
    });

    this.candidatesService.getFilesList().subscribe((data) => {
      this.candidatesList = data;
    });

    const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');

    this.data = {
      labels: [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running',
      ],
      datasets: [
        {
          label: 'My First dataset',
          borderColor: documentStyle.getPropertyValue('--bluegray-400'),
          pointBackgroundColor:
            documentStyle.getPropertyValue('--bluegray-400'),
          pointBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor:
            documentStyle.getPropertyValue('--bluegray-400'),
          data: [65, 59, 90, 81, 56, 55, 40],
        },
        {
          label: 'My Second dataset',
          borderColor: documentStyle.getPropertyValue('--pink-400'),
          pointBackgroundColor: documentStyle.getPropertyValue('--pink-400'),
          pointBorderColor: documentStyle.getPropertyValue('--pink-400'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: documentStyle.getPropertyValue('--pink-400'),
          data: [28, 48, 40, 19, 96, 27, 100],
        },
      ],
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        r: {
          grid: {
            color: textColorSecondary,
          },
          pointLabels: {
            color: textColorSecondary,
          },
        },
      },
    };
  }

  removeCandidate(candidate: any) {
    this.selectedCandidates = this.selectedCandidates.filter(
      (c: any) => c !== candidate
    );
  }
}
