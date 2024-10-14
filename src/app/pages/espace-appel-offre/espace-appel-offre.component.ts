import { Component, inject, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { HttpClient } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { NgForOf, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { WordingUpload } from '../../core/models/model';
import { Button } from 'primeng/button';
import { AbstractUploadAnalyseFileService } from '../../core/services/upload-analyse-file';
import { UploadAnalyseComponent } from '../../shared/upload-analyse/upload-analyse.component';
import { AoService } from '../../core/services/ao.service';
import { AbbreviatePipe } from '../../shared/pipes/abbreviate.pipe';
import { SplitStringPipe } from '../../shared/pipes/split.pipe';
import { ResultatAnalyseAOComponent } from '../analyse-appel-offre/resultat-appel-offre/resultat-analyse-appel-offre.component';
import { AoRedirectService } from '../../core/services/ao.redirect.service';

@Component({
  selector: 'app-espace-appel-offre',
  standalone: true,
  imports: [
    CardModule,
    NgForOf,
    FormsModule,
    TableModule,
    TagModule,
    InputTextModule,
    Button,
    NgIf,
    UploadAnalyseComponent,
    AbbreviatePipe,
    SplitStringPipe,
    ResultatAnalyseAOComponent
  ],
  templateUrl: './espace-appel-offre.component.html',
  styleUrl: './espace-appel-offre.component.css',
  providers: [
    { provide: AbstractUploadAnalyseFileService, useClass: AoService }
  ]
})
export class EspaceAppelOffreComponent implements OnInit {
  public analyseService = inject(HttpClient);
  router = inject(Router);
  searchValue = '';
  listAO: any[] = [];
  wordings: WordingUpload = {
    title: "Analyser un appel d'offres (AO)",
    subTitle: "Téléchargez ou sélectionnez dans la liste le document d’AO que vous souhaitez analyser",
    section1_title: "Télécharger un appel d'offres",
    section2_title: "Sélectionner un appel d'offres"
  }

  constructor(private ao: AoService, private aoRedirectService: AoRedirectService) { }

  ngOnInit() {
    this.ao.getAllAnalysedAos().subscribe((data: any) => { this.listAO = data; })
  }

  globalSearch(dt: any, event: any) {
    return dt.filterGlobal(event.target.value, 'contains');
  }

  redirect(ao: any) {
    this.aoRedirectService.redirect(ao)
  }
}
