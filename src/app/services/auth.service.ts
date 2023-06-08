import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public usuario!:String;

  constructor() {
    this.usuario = localStorage.getItem('usuario') || "";
  }

  login(usuario:string){
    localStorage.setItem('usuario',usuario);
  }

  logout(){
    localStorage.removeItem('usuario');
  }

  isAutenticated(){
    if(localStorage.getItem('usuario') == null){
      return false;
    }

    return true;
  }


}
