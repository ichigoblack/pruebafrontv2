import { Component } from '@angular/core';
import { Obra } from 'src/app/models/Obra';
import { ObrasService } from 'src/app/services/obras.service';

@Component({
  selector: 'app-obrasfavoritas',
  templateUrl: './obrasfavoritas.component.html',
  styleUrls: ['./obrasfavoritas.component.css']
})
export class ObrasfavoritasComponent {

  obrasFavoritas:Obra[] = [];

  constructor(
    private obrasService:ObrasService
  ){
    this.obrasFavoritas = this.obrasService.getObrasFavoritas();
  }

  eliminar(obra:Obra){
    this.obrasService.eliminarObraFavorita(obra);
  }

  

}
