import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Obra } from '../models/Obra';

@Injectable({
  providedIn: 'root'
})
export class ObrasService {

  obrasFavoritas:Obra[] = []; 

  public base = environment.baseUrl;

  constructor(private http:HttpClient) { }

  agregarObraFavorita(obra:Obra){
    this.obrasFavoritas.push(obra);
  }

  eliminarObraFavorita(obra:Obra){
    let element = 0;  
    this.obrasFavoritas.forEach((o,index)=>{
        if(o.title == obra.title){
          element = index;
        }
      })

    this.obrasFavoritas.splice( element , 1 );
  }

  getObrasFavoritas(){
    return this.obrasFavoritas;
  }

  getObrasPorAutor(autor:string){
    return this.http.get(`${this.base}/author/${autor}/title`)
  }

  getFragmento(obra:string){
    return this.http.get(`${this.base}/title/${obra}`);
  }

  getObrasRandom(){
    return this.http.get(`${this.base}/random/5/author,title.json`);
  }
}
