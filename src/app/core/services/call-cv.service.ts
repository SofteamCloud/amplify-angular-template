import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Developer} from "./developer";

@Injectable({
  providedIn: "root"
})
export class CallCVService {

  constructor(private http: HttpClient) { }

  callDeveloperCv(): Observable<any> {
    return this.http.get<Developer>('https://v7sk3jpn45.execute-api.eu-west-3.amazonaws.com/v1/cv-analyzer');
  }

}


