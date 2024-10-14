
import { Observable } from 'rxjs';
import { Profil } from '../models/model';

export abstract class AbstractUploadAnalyseFileService {
  protected abstract getListFromApi(): Observable<Profil[]>;
  protected abstract uploadFileToApi(file: File): Observable<any>;
  protected abstract analyseFileToApi(File: string): Observable<any>;

  getFilesList(): Observable<Profil[]> {
    return this.getListFromApi();
  }

  uploadFile(file: File): Observable<any> {
    return this.uploadFileToApi(file);
  }

  analyseFile(File: string): Observable<any> {
    return this.analyseFileToApi(File);
  }

}