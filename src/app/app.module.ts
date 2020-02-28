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
import { BoutonResultatComponent } from './bouton-resultat/bouton-resultat.component';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { FrancaisSpecialiseComponent } from './francais-specialise/francais-specialise.component';
import { CapitalizeFirstLetterPipe } from './shared/pipes/capitalizefirstletter.pipe';
import { DetailSousThemeComponent } from './detail-sous-theme/detail-sous-theme.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultatsRechercheComponent,
    ResultatsMotCleComponent,
    ContenantResultatComponent,
    BoiteOutilsComponent,
    BoutonResultatComponent,
    HighlightDirective,
    CapitalizeFirstLetterPipe,
    FrancaisSpecialiseComponent,
    DetailSousThemeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'details/:niveau/:exercice/:theme/:item', component: DetailSousThemeComponent},
      { path: 'details/:soustype/:item', component: DetailSousThemeComponent},
      { path: 'details/:item', component: DetailSousThemeComponent},
      { path: 'resultat_mot_cle/:motCle/:item', component: DetailSousThemeComponent},
      { path: 'resultats/:niveau/:exercice/:type', component: ResultatsRechercheComponent},
      { path: 'resultat_mot_cle/:motCle', component: ResultatsMotCleComponent},
      { path: 'boite_outils/:outil', component: BoiteOutilsComponent},
      { path: 'fr_sp/:type', component: FrancaisSpecialiseComponent},
      { path: 'bouton', component: BoutonResultatComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
