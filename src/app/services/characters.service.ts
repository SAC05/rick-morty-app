import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private _http: HttpClient) { }

  getCharacters(): Observable<any> {
    let endpoint = `${environment.rmApiBase}/character`;
    return this._http.get(endpoint);
  }
}
