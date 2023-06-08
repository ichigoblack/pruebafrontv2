import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAutoresComponent } from './lista-autores/lista-autores.component';
import { Route, RouterModule } from '@angular/router';
import { ObrasfavoritasComponent } from './obrasfavoritas/obrasfavoritas.component';
import { ComponentsModule } from '../components/components.module';
import { AuthGuard } from '../guards/auth.guard';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';

const routes:Route[] = [
  {
    path:'main',
    component:MainComponent,
    children:[
      {
        path:'',
        component:ListaAutoresComponent
      },
      {
        path:'obrasfavoritas',
        canActivate : [AuthGuard],
        component:ObrasfavoritasComponent
      }
    ]
  },
]

@NgModule({
  declarations: [
    ListaAutoresComponent,
    ObrasfavoritasComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    SharedModule
  ]
})
export class PagesModule { }
