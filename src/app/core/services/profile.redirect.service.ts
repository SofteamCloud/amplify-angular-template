import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Profil } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  constructor(private router: Router) {}

  redirect(profil: Profil) {
    profil.metier_fonc = profil.metier_fonc
      ? profil.metier_fonc
      : [];
    profil.experience = profil.experience
      ? profil.experience.match(/[0-9]+/g)?.[0]
      : undefined;
    profil.attractivite = profil.attractivite
      ? profil.attractivite.match(/[0-9]+/g)?.[0]
      : '0';
    profil.techno_majeures = profil.techno_majeures
      ? profil.techno_majeures
      : [];
    profil.techno_mineures = profil.techno_mineures
      ? profil.techno_mineures
      : [];
    this.router.navigate(['/analyse-cv'], { state: profil });
  }
}