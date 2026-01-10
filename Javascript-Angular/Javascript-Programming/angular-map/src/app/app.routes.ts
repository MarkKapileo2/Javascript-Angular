import { Routes } from '@angular/router';
import { InteractiveMapComponent } from './interactive-map/interactive-map.component';

export const routes: Routes = [
  { path: '', redirectTo: '/interactivemap', pathMatch: 'full' },
  { path: 'interactivemap', component: InteractiveMapComponent }
];
