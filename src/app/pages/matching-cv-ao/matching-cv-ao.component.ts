import { Component } from '@angular/core';
import { SelectorComponent } from './selector/selector.component';
import { MatchingListComponent } from './matching-list/matching-list.component';

@Component({
  selector: 'app-matching-cv-ao',
  standalone: true,
  imports: [SelectorComponent, MatchingListComponent],
  templateUrl: './matching-cv-ao.component.html',
  styleUrl: './matching-cv-ao.component.css'
})
export class MatchingCvAoComponent {

}
