import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DetailsCard } from '../../core/models/model';

@Component({
  selector: 'app-details-card',
  standalone: true,
  imports: [CardModule],
  templateUrl: './details-card.component.html',
  styleUrl: './details-card.component.css'
})
export class DetailsCardComponent {

  @Input()
  data!: DetailsCard;

}
