import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAutoresComponent } from './lista-autores/lista-autores.component';
import { Route, RouterModule } from '@angular/router';
import { ObrasfavoritasComponent } from './obrasfavoritas/obrasfavoritas.component';
import { ComponentsModule } from '../components/components.module';
import { AuthGuard } from '../guards/auth.guard';

const routes:Route[] = [
  {
    path:'autores',
    component:ListaAutoresComponent
  },
  {
    path:'obrasfavoritas',
    canActivate : [AuthGuard],
    component:ObrasfavoritasComponent
  }
]

@NgModule({
  declarations: [
    ListaAutoresComponent,
    ObrasfavoritasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ]
})
export class PagesModule { }
