import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { ResultatsRechercheComponent } from './core/components/resultats-recherche/resultats-recherche.component';

const routes: Routes = [

      {path: '', redirectTo: 'Home', pathMatch: 'full'},
      {path: 'Home', component: HomeComponent},
      {path: 'resultats-rech', component: ResultatsRechercheComponent},
      //{path: 'resultats-mot-cle', component:CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
