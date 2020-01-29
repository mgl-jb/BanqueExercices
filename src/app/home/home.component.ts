import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import menuRecherche from 'assets/menuRecherche.json';


export interface Resultat {
  niveau: string;
  competence: string;
  theme: string;
  type: string;
  sous_theme: string;
  activite: string;
  mot_cle: string;
  lien: string;
  langue: string;
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

  niveau = 'débutant';

  competence = 'toutes les compétences' ;

  theme = '' ;

  competenceArray: any;

  themeArray: any;


  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  configurerCompetence(u5: any) {
    this.themeArray = [];
    this.competence = u5;
    this.themeArray = this.menuRecherche[this.niveau][this.competence];
    this.selectSur.nativeElement.selectedIndex = 0;
    this.theme = this.themeArray[0];
  }

  rechercherParMotCle() {
    // let fuse : any = new Fuse(this.exercices, this.creerOptions('mot_cle'));
    // this.resultats = fuse.search(this.motCle);
    // console.log(this.resultats);
    // let path = 'resultat_mot_cle/:motCle';
    // let route = this.router.config.find(r => r.path === path);
    // route.data = { resultats: this.resultats };
    this.router.navigate(['/resultat_mot_cle', this.motCle]);
  }

  afficherResultats() {
    this.router.navigate(['/resultats', this.niveau, this.competence, this.theme]);
  }

  resetSelelction() {
    this.selectNiveau.nativeElement.selectedIndex = 0;
    this.niveau = this.selectNiveau.nativeElement.options[0].value;
    this.selectCompetence.nativeElement.selectedIndex = 0;
    this.competence = this.selectCompetence.nativeElement.options[0].value;
    this.theme = '';
    this.themeArray = [];
  }
}
