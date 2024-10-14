import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MatchingService {
  private API: string =
    'https://v7sk3jpn45.execute-api.eu-west-3.amazonaws.com/v1/';

  constructor(private http: HttpClient) {}

  getMatchingList(): Observable<any> {
    return this.http.get<any>(this.API + 'scan-ao-cv-table');
  }
}
