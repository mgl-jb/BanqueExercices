import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
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

  @ViewChild('t1', {static: false}) selectNiveau: ElementRef;
  @ViewChild('t2', {static: false}) selectCompetence: ElementRef;
  @ViewChild('t3', {static: false}) selectSur: ElementRef;

  menuRecherche: any = menuRecherche;

  resultats: any;

  motCle: string;

  niveau: any;

  competence: any ;

  sur: any ;

  competenceArray: any;

  surArray: any;

  MenuKeys: any;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }


  configurer_u5_input(u2: any) {
    this.MenuKeys = [];
    this.surArray = [];
    this.niveau = u2;
    this.competenceArray = this.menuRecherche[this.niveau];
    this.MenuKeys = Object.keys(this.competenceArray);
    this.selectCompetence.nativeElement.selectedIndex = 0;
    this.competence = this.MenuKeys[0];
  }

  configurer_u7_input(u5: any) {
    this.surArray = [];
    this.competence = u5;
    this.surArray = this.menuRecherche[this.niveau][this.competence];
    this.selectSur.nativeElement.selectedIndex = 0;
    this.sur = this.surArray[0];
  }

  myClick() {
    // let fuse : any = new Fuse(this.exercices, this.creerOptions('mot_cle'));
    // this.resultats = fuse.search(this.motCle);
    // console.log(this.resultats);
    // let path = 'resultat_mot_cle/:motCle';
    // let route = this.router.config.find(r => r.path === path);
    // route.data = { resultats: this.resultats };
    this.router.navigate(['/resultat_mot_cle', this.motCle]);
  }

  myClick2(u7: any) {
    this.sur = u7;
  }

  myClick3() {
    // let fuse1 : any = new Fuse(this.exercices, this.creerOptions('niveau'));
    // let tab1 = fuse1.search(this.niveau);
    // let fuse2 : any = new Fuse(tab1, this.creerOptions('competence'));
    // let tab2 = fuse2.search(this.competence);
    // let fuse3 : any = new Fuse(tab2, this.creerOptions('sur1'));
    // this.resultats = fuse3.search(this.sur);
    // let path = 'resultats/:niveau/:exercice/:type';
    // let route = this.router.config.find(r => r.path === path);
    // route.data = { resultats: this.resultats };
    this.router.navigate(['/resultats', this.niveau, this.competence, this.sur]);
  }

  resetSelelction() {
    this.selectNiveau.nativeElement.selectedIndex = 0;
    this.MenuKeys = [];
    this.surArray = [];
  }
}
