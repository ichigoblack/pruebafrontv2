import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Obra } from 'src/app/models/Obra';
import { ObrasService } from 'src/app/services/obras.service';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

import Swall from 'sweetalert2'

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.css']
})
export class ObrasComponent implements OnInit {

  public obras:Obra[] = [];
  public rows!:number;
  public title!:string;
  fragmento:string[] = [];

  cargando = true;

  @Input("autor")
  public autor!:string;

  constructor(
    private obrasService:ObrasService,
    private modalService: NgbModal
  ){
    
  }

  ngOnInit(): void {
    this.obrasService.getObrasPorAutor(this.autor)
            .subscribe((data:any)=>{
              this.obras = data;
            })
  }

  verFragmento(obra:Obra,content:any){
    
    this.modalService.open( content, { ariaLabelledBy: 'modal-basic-title' } );


    this.obrasService.getFragmento(obra.title)
            .subscribe((data:any)=>{
                this.rows = data[0].linecount;
                this.fragmento = data[0].lines;
                this.title = data[0].title;
                console.log(data);

    });

  }

  marcarFavorita(obra:Obra){
    this.obrasService.agregarObraFavorita(obra);
    Swall.fire({
      title:'Exito',
      icon:'success',
      text:'Se agrego a favoritos'
    })
  }



}
