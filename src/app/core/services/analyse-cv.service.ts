import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Profil } from '../models/model';
import { AbstractUploadAnalyseFileService } from './upload-analyse-file';

@Injectable({
  providedIn: 'root'
})
export class AnalyseCandidatService extends AbstractUploadAnalyseFileService {

  private API: string = 'https://v7sk3jpn45.execute-api.eu-west-3.amazonaws.com/v1/';

  constructor(private http: HttpClient) {
    super();
  }

  public override getListFromApi(): Observable<Profil[]> {
    return this.http.get<any[]>(this.API + 'cv-list');
  }
  protected override uploadFileToApi(data: File): Observable<any> {
    return new Observable((observer) => {
      const reader = new FileReader();

      reader.readAsDataURL(data);
      reader.onload = () => {
        const base64File = reader.result?.toString().split(',')[1];
        const body = {
          file: base64File,
          fileName: data.name,
        };

        this.http.post<any>(this.API + 'upload-cv', body).subscribe(
          (response) => {
            observer.next(response);
            observer.complete();
          },
          (error) => {
            observer.error(error);
          }
        );
      };

      reader.onerror = (error) => {
        observer.error(error);
      };
    });
  }
  protected override analyseFileToApi(fileName: string): Observable<any> {
    return this.http.get<any>(this.API + 'cv-analyzer?file_name=' + fileName);
  }

  getAllAnalysedCandidats(): Observable<any> {
    return this.http.get<any>(this.API + 'scan-cv-table');
  }

}


