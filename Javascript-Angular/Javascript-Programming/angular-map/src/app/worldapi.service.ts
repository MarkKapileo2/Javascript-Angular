import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class worldapi {

  private apiUrl: string = 'https://api.worldbank.org/v2/country';

  constructor(private http: HttpClient) {}

  fetchCountryData(countryCode: string): Observable<any> {
    const url = `${this.apiUrl}/${countryCode}?format=json`;
    return this.http.get<any>(url);
  }
}
