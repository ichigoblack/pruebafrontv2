import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  
    {
      path:'auth',
      loadChildren: ()=> import('./auth/auth.module').then(m=>m.AuthModule)
    },
    {
      path:'app',
      loadChildren: ()=> import('./pages/pages.module').then(m=>m.PagesModule)
    },
    {
      path:'',
      redirectTo:'app/main',
      pathMatch:'full'
    },
    {
      path:'**',
      redirectTo:'app/main',
      pathMatch:'full'
    }
];

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes),
    PagesModule,
    AuthModule
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
