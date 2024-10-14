import { Component } from '@angular/core';
import { MatchingListComponent } from '../matching-cv-ao/matching-list/matching-list.component';
import { RadarComponent } from './radar/radar.component';

@Component({
  selector: 'app-synthese-graphique',
  standalone: true,
  imports: [RadarComponent, MatchingListComponent],
  templateUrl: './synthese-graphique.component.html',
  styleUrl: './synthese-graphique.component.css'
})
export class SyntheseGraphiqueComponent {

}
