import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ObraRandom } from 'src/app/models/ObraRandom';
import { ObrasService } from 'src/app/services/obras.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  obrasRandom:ObraRandom[] = [];


  constructor(
    private obrasService:ObrasService,
    private router:Router
  ){
      this.obrasService.getObrasRandom()
            .subscribe((obras:any)=>{
              this.obrasRandom = obras;
            })
  }

  irFavoritas(){
    this.router.navigateByUrl('/app/obrasfavoritas');
  }
  irAutores(){
    this.router.navigateByUrl('/app/autores');
  }
}
