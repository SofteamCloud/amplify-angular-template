import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'ao-card',
  standalone: true,
  imports: [CardModule, CommonModule, TagModule],
  templateUrl: './ao-card.component.html',
  styleUrl: './ao-card.component.css'
})
export class AoCardComponent {
  @Input() title!: string;
  @Input() quotation!: number;
  @Input() id!: string;
  @Input() ref!: string;
  @Input() client!: string;
  @Input() sector!: string;
  @Input() profiles!: string[];
  @Input() startDate!: string;
  @Input() duration!: string;
}
