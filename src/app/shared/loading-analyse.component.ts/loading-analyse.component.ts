import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-loading-dialog',
  standalone: true,
  imports: [CommonModule, DialogModule, ButtonModule, ProgressSpinnerModule],
  template: `
    <p-dialog 
      [(visible)]="display" 
      [modal]="true" 
      [closable]="false"
      [showHeader]="false"
      [style]="{width: '600px'}"
      [contentStyle]="{padding: '20px', textAlign: 'center'}"
      *ngIf="isBrowser"
    >
      <div class="flex flex-column align-items-center">
        <p-progressSpinner [style]="{width: '50px', height: '50px'}"></p-progressSpinner>
        <h3 style="color:'00008C'">Veuillez patienter</h3>
        <p>L'analyse NIR Assistant est en cours</p>
        <button pButton label="Annuler l'analyse" (click)="cancelAnalysis()"></button>
      </div>
    </p-dialog>
  `
})
export class LoadingAnalyseComponent {
  display: boolean = false;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  show() {
    if (this.isBrowser) {
      this.display = true;
    }
  }

  hide() {
    if (this.isBrowser) {
      this.display = false;
    }
  }

  cancelAnalysis() {
    if (this.isBrowser) {
      // Implémentez ici la logique pour annuler l'analyse
      console.log('Analyse annulée');
      this.hide();
    }
  }
}