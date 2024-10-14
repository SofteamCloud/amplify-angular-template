import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AoRedirectService {
  constructor(private router: Router) {}

  redirect(ao: any) {
    this.router.navigate(['/analyse-ao'], { state: ao });
  }
}
