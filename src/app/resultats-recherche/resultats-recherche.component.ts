import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2,  AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import Fuse from 'fuse.js';
import {Resultat} from '../home/home.component';
import exercices from 'assets/exercices.json';


@Component({
  selector: 'app-resultats-recherche',
  templateUrl: './resultats-recherche.component.html',
  styleUrls: [
    '../shared/jquery-ui-themes.css',
    '../shared/axure_rp_page.css',
    '../shared/styles_data.css',
    './resultats-recherche.component.css'
]
})
export class ResultatsRechercheComponent implements OnInit {

  exercices: Resultat[] = exercices;
  niveau: string;
  exercice: string;
  theme: string;
  filtre: string;
  clicked = false;
  toutesCompetences: boolean;
  resultats: Resultat[];
  resultats2: string[];
  options: any;
  color = '#016BB5';
  highlightColor = '#e4f1fa';
  imageSrc = 'assets/images/u129.png';
  typeRecherche = 'menu';

  constructor(private route: ActivatedRoute, private renderer: Renderer2, private el: ElementRef) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.niveau = this.route.snapshot.paramMap.get('niveau');
      this.exercice = this.route.snapshot.paramMap.get('exercice');
      this.theme = this.route.snapshot.paramMap.get('type');
      this.toutesCompetences = (this.exercice === 'toutes les compétences');
      this.trouverResultats();
    });
    }

  onNotify(message: any): void {
    const elts = this.el.nativeElement.querySelectorAll('#u999_div');
    elts.forEach(element => {element.classList.remove('selected'); });
    this.filtre = message.item;
    this.clicked = message.clicked;
  }
  trouverResultats() {
    const fuse1: any = new Fuse(this.exercices, this.creerOptions('niveau'));
    if (this.toutesCompetences) {
      this.resultats = fuse1.search(this.niveau);
      this.resultats2 =  [...new Set(this.resultats.map(it => it.competence).filter(i => i !== ''))];
    } else {
    const tab1 = fuse1.search(this.niveau);
    const fuse2: any = new Fuse(tab1, this.creerOptions('competence'));
    this.resultats = fuse2.search(this.exercice).filter(it => it.type === 'Exercice');
    if ( this.theme !== '') {
      const fuse3: any = new Fuse(this.resultats, this.creerOptions('theme'));
      this.resultats = fuse3.search(this.theme);
    }
    this.resultats2 =  [...new Set(this.resultats.map(it => it.sous_theme))];
    }
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
