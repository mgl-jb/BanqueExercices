import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import Fuse from 'fuse.js';
import { ResultatsRechercheComponent } from '../resultats-recherche/resultats-recherche.component';
import exercices from '../../assets/exercices.json';
import menuRecherche from '../../assets/menuRecherche.json';


export interface DialogData {
  niveau: string;
  sujet: string;
  exercice: string;
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

  motCle: string;
  exercices: any = exercices;
  menuRecherche: any = menuRecherche;

  options = {
    tokenize: true,
    matchAllTokens: true,
    keys: ["Titre de l'activité"]
  };

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
    console.log('test');
    let fuse : any = new Fuse(this.exercices, this.options);
    var txt = this.motCle;
    console.log(txt);
    console.log(this.options);
    console.log(fuse.search(txt));
  }

  myClick2(u7:any) {
    this.u7Input = u7;
    console.log(this.u7Input);
    // let index = this.testView2.nativeElement.selectedIndex;
    // let option = this.testView2.nativeElement.options[index];

    // console.log(option.innerText);
  }

  resetSelelction() {
    this.testView.nativeElement.selectedIndex = 0;
    this.keys1 = [];
    this.array2 = [];
  }
}
