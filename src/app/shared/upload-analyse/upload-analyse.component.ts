import {
  Component,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CardModule } from 'primeng/card';
import { FileUploadModule } from 'primeng/fileupload';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { NgIf } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { AbstractUploadAnalyseFileService } from '../../core/services/upload-analyse-file';
import { AppelOffre, Profil, WordingUpload } from '../../core/models/model';
import { LoadingAnalyseComponent } from '../loading-analyse.component.ts/loading-analyse.component';
import { filter, finalize, Subscription } from 'rxjs';
import { ResultatAnalyseCvComponent } from '../../pages/analyse-cv/resultat-analyse-cv/resultat-analyse-cv.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { ProfilService } from '../../core/services/profile.redirect.service';
import { Router, NavigationEnd } from '@angular/router';
import { ResultatAnalyseAOComponent } from '../../pages/analyse-appel-offre/resultat-appel-offre/resultat-analyse-appel-offre.component';
import { AoRedirectService } from '../../core/services/ao.redirect.service';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'app-upload-analyse',
  standalone: true,
  imports: [
    CardModule,
    FileUploadModule,
    DividerModule,
    DropdownModule,
    FormsModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    NgIf,
    TabViewModule,
    DividerModule,
    LoadingAnalyseComponent,
    ResultatAnalyseCvComponent,
    ResultatAnalyseAOComponent,
    ToastModule,
    RippleModule,
    FieldsetModule
  ],
  templateUrl: './upload-analyse.component.html',
  styleUrl: './upload-analyse.component.css',
  providers: [MessageService],
})
export class UploadAnalyseComponent implements OnInit, OnDestroy {
  private routerSubscription: Subscription | any;
  @ViewChild(LoadingAnalyseComponent) loadingDialog!: LoadingAnalyseComponent;
  @Input() wordings: WordingUpload = {
    title: '',
    subTitle: '',
    section1_title: '',
    section2_title: '',
  };

  selectedFileToUpload: any | null;
  uploadedFile: File | undefined = undefined;
  listToAnalyse: any[] = [];
  selectedFileFromList: any | undefined;
  data: any;
  showAnalyse = false;
  tabIndex: number = 0;
  myPrompt: string = ''

  constructor(
    @Inject(AbstractUploadAnalyseFileService)
    private uploadAnalyseFile: AbstractUploadAnalyseFileService,
    private messageService: MessageService,
    private profilService: ProfilService,
    private aoService: AoRedirectService,
    public router: Router
  ) {}

  ngOnInit() {
    this.uploadAnalyseFile.getFilesList().subscribe((data) => {
      this.listToAnalyse = data;
    });
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.showAnalyse = false;
      });
  }

  uplaodFile() {
    this.uploadAnalyseFile.uploadFile(this.selectedFileToUpload).subscribe({
      next: (data: File) => {
        this.uploadedFile = this.selectedFileToUpload;
        this.messageService.add({
          severity: 'success',
          summary: 'Téléchargement terminé',
          detail: 'Le téléchargement du fichier a été effectué avec succès',
        });
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Oups ! Le téléchargement a échoué',
          detail: 'Une erreur s’est produite lors du téléchargement de fichier',
        });
      },
    });
  }

  analyseFile() {
    this.loadingDialog.show();

    const uploadedFileName = this.uploadedFile ? this.uploadedFile.name : '';
    const selectedFileFromListName = this.selectedFileFromList
      ? this.selectedFileFromList.Key
      : '';

    const fileName =
      this.tabIndex === 0 ? uploadedFileName : selectedFileFromListName;
    this.uploadAnalyseFile
      .analyseFile(fileName)
      .pipe(
        finalize(() => {
          this.loadingDialog.hide();
          this.showAnalyse = true;
        })
      )
      .subscribe({
        next: (result) => {
          this.data = result;
          console.log('Analyse terminée avec succès', result);
          this.messageService.add({
            severity: 'success',
            summary: 'Analyse terminée',
            detail: 'L’analyse du fichier a été effectuée avec succès',
          });
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Oups ! L’analyse a échoué',
            detail: 'Une erreur s’est produite lors de l’analyse du fichier',
          });
          this.showAnalyse = false;
        },
      });
  }

  onFileSelect(event: any) {
    this.uploadedFile = undefined;
    this.selectedFileToUpload = event.files[0];
  }

  triggerFileSelect() {
    const fileInputElement = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;
    if (fileInputElement) {
      fileInputElement.click();
    }
  }

  redirectProfile(data: Profil) {
    this.profilService.redirect(data);
  }

  redirectAo(data: AppelOffre) {
    this.aoService.redirect(data);
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
