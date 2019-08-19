import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import Fuse from 'fuse.js';
import { ResultatsRechercheComponent } from '../resultats-recherche/resultats-recherche.component';
import exercices from '../../assets/exercices.json';
import menuRecherche from '../../assets/menuRecherche.json';


export interface Resultat {
  niveau: string;
  competence: string;
  sur1: string;
  mot_cle: string;
  vide1: string;
  activite: string;
  langue: string;
  lien: string;
  phrase_explicative: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    '../shared/jquery-ui-themes.css',
    '../shared/axure_rp_page.css',
    '../shared/styles_data.css',
    './home.component.css'
  ]
})
export class HomeComponent implements OnInit {

  @ViewChild('t1', {static: false}) testView: ElementRef;
  @ViewChild('t2', {static: false}) testView2: ElementRef;
  @ViewChild('t3', {static: false}) testView3: ElementRef;

  resultats: any;
  motCle: string;
  exercices: Resultat[] = exercices;
  menuRecherche: any = menuRecherche;

  options: any;

  u2Input: any;

  u5Input: any ;

  u7Input: any ;

  array1: any;

  array2: any;

  keys1: any;

  keys2: any;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }


  configurer_u5_input(u2: any) {
    this.keys1 = [];
    this.array2 = [];
    this.u2Input = u2;
    this.array1 = this.menuRecherche[this.u2Input];
    this.keys1 = Object.keys(this.array1);
    this.testView2.nativeElement.selectedIndex = 0;
    this.u5Input = this.keys1[0];
  }

  configurer_u7_input(u5: any) {
    this.array2 = [];
    this.u5Input = u5;
    this.array2 = this.menuRecherche[this.u2Input][this.u5Input];
    this.testView3.nativeElement.selectedIndex = 0;
    this.u7Input = this.array2[0];
  }

  myClick() {
    let fuse : any = new Fuse(this.exercices, this.creerOptions('mot_cle'));
    this.resultats = fuse.search(this.motCle);
    console.log(this.resultats);
    let path = 'resultat_mot_cle/:motCle';
    let route = this.router.config.find(r => r.path === path);
    route.data = { resultats: this.resultats };
    this.router.navigate(['/resultat_mot_cle', this.motCle]);
  }

  myClick2(u7: any) {
    this.u7Input = u7;
  }

  myClick3() {
    let fuse1 : any = new Fuse(this.exercices, this.creerOptions('niveau'));
    let tab1 = fuse1.search(this.u2Input);
    let fuse2 : any = new Fuse(tab1, this.creerOptions('competence'));
    let tab2 = fuse2.search(this.u5Input);
    let fuse3 : any = new Fuse(tab2, this.creerOptions('sur1'));
    this.resultats = fuse3.search(this.u7Input);
    let path = 'resultats/:niveau/:exercice/:type';
    let route = this.router.config.find(r => r.path === path);
    route.data = { resultats: this.resultats };
    this.router.navigate(['/resultats', this.u2Input, this.u5Input, this.u7Input]);
  }
  resetSelelction() {
    this.testView.nativeElement.selectedIndex = 0;
    this.keys1 = [];
    this.array2 = [];
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
