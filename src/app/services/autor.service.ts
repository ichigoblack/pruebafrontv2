import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  public base = environment.baseUrl;

  constructor(
    private http:HttpClient
  ) { }

  getAutores(){
    return this.http.get(`${this.base}/author`);
  }


}
