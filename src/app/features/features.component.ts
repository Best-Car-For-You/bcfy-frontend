import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import featuresData from './featuresData';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  featuresData = featuresData;
}
