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

@Component({
  selector: 'app-selector',
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
  ],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.css',
})
export class SelectorComponent implements OnInit {
  aoList: any;
  selectedAo: any;
  candidatesList: any;
  selectedCandidates: any;

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
  }

  removeCandidate(candidate: any) {
    this.selectedCandidates = this.selectedCandidates.filter(
      (c: any) => c !== candidate
    );
  }
}
