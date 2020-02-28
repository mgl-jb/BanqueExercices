import { Injectable } from '@angular/core';
import Fuse from 'fuse.js';
import exercices from 'assets/exercices.json';
import { Resultat } from 'app/home/home.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RechercheService {
  options: any;
  exercices: Resultat[] = exercices;
  resultats: any;
  resultats2: unknown[];
  constructor() { }

  trouverResultatsMenu1(niveau: string, competence: string, theme: string, toutesCompetences: boolean): any {
    const fuse1: any = new Fuse(this.exercices, this.creerOptions('niveau'));
    if (toutesCompetences) {
      this.resultats = fuse1.search(niveau);
      this.resultats2 =  [...new Set(this.resultats.map(it => it.competence).filter(i => i !== ''))];
    } else {
    const tab1 = fuse1.search(niveau);
    const fuse2: any = new Fuse(tab1, this.creerOptions('competence'));
    this.resultats = fuse2.search(competence).filter(it => it.type === 'Exercice');
    if ( theme !== '') {
      const fuse3: any = new Fuse(this.resultats, this.creerOptions('theme'));
      this.resultats = fuse3.search(theme);
    }
    this.resultats2 =  [...new Set(this.resultats.map(it => it.sous_theme))];
    }
  }


  trouverResultatsMenu(resultats: Resultat[], niveau: string, competence: string, theme: string, toutesCompetences: boolean): void {
    const fuse1: any = new Fuse(this.exercices, this.creerOptions('niveau'));
    if (toutesCompetences) {
      resultats = fuse1.search(niveau);
    } else {
    const tab1 = fuse1.search(niveau);
    const fuse2: any = new Fuse(tab1, this.creerOptions('competence'));
    resultats = fuse2.search(competence).filter(it => it.type === 'Exercice');
    if ( theme !== '') {
      const fuse3: any = new Fuse(this.resultats, this.creerOptions('theme'));
      resultats = fuse3.search(theme);
    }
    }

  }

  trouverResultatsSousTheme(resultats: Resultat[], resultats2: string[], toutesCompetences: boolean): void {
    if (toutesCompetences) {
      resultats2 = [...new Set(resultats.map(it => it.competence).filter(i => i !== ''))];
    } else {
      resultats2 =  [...new Set(resultats.map(it => it.sous_theme))];
    }
  }

  trouverResultatsOutil(outil: string) {
    const fuse: any = new Fuse(this.exercices, this.creerOptions('type'));
    return fuse.search(outil);
  }

  trouverResultatsMotCle(motCle: string) {
    const fuse: any = new Fuse(this.exercices, this.creerOptions('mot_cle'));
    return fuse.search(motCle);
  }

  trouverResultatsType(type: string) {
    const fuse: any = new Fuse(this.exercices, this.creerOptions('type'));
    return fuse.search(type);
  }

  trouverResultatsSousType(type: string) {
    const fuse: any = new Fuse(this.exercices, this.creerOptions('sous_type'));
    return fuse.search(type);
  }

  creerOptions(...args: any[]) {
    this.options = {
      tokenize: true,
      matchAllTokens: true,
      threshold: 0,
      location: 0,
      distance: 0,
      keys: args
    };
    return this.options;
  }
}
