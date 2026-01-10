import { Component, OnInit } from '@angular/core';
import { worldapi } from '../worldapi.service';

@Component({
  selector: 'app-world',
  standalone: true,
  imports: [],
  templateUrl: './interactive-map.component.html',
  styleUrls: ['./interactive-map.component.css']
})
export class InteractiveMapComponent implements OnInit {

  constructor(private apiService: worldapi) {}

  ngOnInit(): void {}

  // Mouse over 
  onMouseOver(event: MouseEvent): void {
    const target = event.target as SVGPathElement;
    if (target && target instanceof SVGPathElement) {
      const countryId = target.id;

      this.apiService.fetchCountryData(countryId).subscribe((data: any) => {
        const countryData = data[1][0];
        this.updateCountryInfo(countryData);
      });

      target.style.fill = '#5e2165'; 
    }
  }

  // Mouse out 
  onMouseOut(event: MouseEvent): void {
    const target = event.target as SVGPathElement;
    if (target && target instanceof SVGPathElement) {
      target.style.fill = ''; 

      this.clearCountryInfo(); 
    }
  }

 
  private updateCountryInfo(countryData: any): void {
    this.setElementText('name', countryData.name || 'No Information');
    this.setElementText('capital', countryData.capitalCity || 'No Information');
    this.setElementText('region', countryData.region?.value || 'No Information');
    this.setElementText('income', countryData.incomeLevel?.value || 'No Information');
    this.setElementText('latitude', countryData.latitude || 'No Information');
    this.setElementText('longitude', countryData.longitude || 'No Information');
  }

 
  private setElementText(elementId: string, text: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = text;
    }
  }


  private clearCountryInfo(): void {
    this.setElementText('name', 'No Information');
    this.setElementText('capital', 'No Information');
    this.setElementText('region', 'No Information');
    this.setElementText('income', 'No Information');
    this.setElementText('latitude', 'No Information');
    this.setElementText('longitude', 'No Information');

    //testing purposes
  //     hoveredCountry: string | null = null;
  // countries = [
  //   { name: 'USA', path: 'M100,100 L200,100 L200,200 L100,200 Z' },
  //   { name: 'Canada', path: 'M50,50 L150,50 L150,150 L50,150 Z' }
  // ];

  // onHover(countryName: string) {
  //   this.hoveredCountry = countryName;
  //   console.log(`Hovered over: ${countryName}`);
  // }

  // clearHover() {
  //   console.log(`Hover cleared`);
  //   this.hoveredCountry = null;
  }
}
