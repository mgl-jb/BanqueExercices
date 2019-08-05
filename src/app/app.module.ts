import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResultatsRechercheComponent } from './resultats-recherche/resultats-recherche.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ResultatsMotCleComponent } from './resultats-mot-cle/resultats-mot-cle.component';
import { ContenantResultatComponent } from './contenant-resultat/contenant-resultat.component';
import { BoiteOutilsComponent } from './boite-outils/boite-outils.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultatsRechercheComponent,
    ResultatsMotCleComponent,
    ContenantResultatComponent,
    BoiteOutilsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'resultats/:niveau/:exercice/:type', component: ResultatsRechercheComponent},
      { path: 'resultat_mot_cle/:motCle', component: ResultatsMotCleComponent},
      { path: 'boite_outils', component: BoiteOutilsComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
