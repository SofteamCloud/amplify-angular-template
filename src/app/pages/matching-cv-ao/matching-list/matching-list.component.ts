import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { MatchingService } from '../../../core/services/matching.service';
import { Matching } from '../../../core/models/model';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matching-list',
  standalone: true,
  imports: [CardModule, TagModule, ButtonModule, TableModule, InputTextModule],
  templateUrl: './matching-list.component.html',
  styleUrl: './matching-list.component.css',
})
export class MatchingListComponent implements OnInit {
  router = inject(Router);
  listPreviousMatching: Matching[] = [];

  constructor(private matchingService: MatchingService) {}

  ngOnInit() {
    this.matchingService.getMatchingList().subscribe((data: Matching[]) => {
      this.listPreviousMatching = data;
    });
  }

  globalSearch(dt: any, event: any) {
    return dt.filterGlobal(event.target.value, 'contains');
  }

  redirect(matching: Matching) {
    matching.domaine_ao = matching.domaine_ao
      ? matching.domaine_ao.split(',')
      : [];
      matching.profil_attendu = matching.profil_attendu
      ? matching.profil_attendu.split(',')
      : [];
      matching.techno_ao = matching.techno_ao
      ? matching.techno_ao.split(',')
      : [];
      matching.profil_candidat = matching.profil_candidat
      ? matching.profil_candidat.split(',')
      : [];
    this.router.navigate(['/matching-cvao-result'], { state: matching });
  }
}
