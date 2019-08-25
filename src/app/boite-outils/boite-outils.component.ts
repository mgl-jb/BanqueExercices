import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import Fuse from 'fuse.js';
import boiteOutils from '../../assets/boiteOutils.json';
import { ActivatedRoute } from '@angular/router';

export interface ResultatBoite {
  niveau: string;
  categorie_ressource: string;
  type_ressource: string;
  activite: string;
  sous_type_2: string;
  phrase_explicative: string;
  mots_clés: string;
  lien: string;
  langue: string;
}

@Component({
  selector: 'app-boite-outils',
  templateUrl: './boite-outils.component.html',
  styleUrls: [
    '../shared/jquery-ui-themes.css',
    '../shared/axure_rp_page.css',
    '../shared/styles_data.css',
    './boite-outils.component.css']
})
export class BoiteOutilsComponent implements OnInit {

  boiteOutils: ResultatBoite[] = boiteOutils;
  @ViewChild('fleche', {static: false}) fleche: ElementRef;
  listeDeroulante = false;
  degree = 180;
  options: any;
  resultats: ResultatBoite[];
  resultats2: string[];
  outil: string;
  filtre: string;
  clicked = false;
  filtred = false;
  pageColor = '#0BB601';
  highlightColor = '#D9FCD9';
  imageSrc = '../../assets/images/u73.png';

  constructor( private route: ActivatedRoute, private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.outil = this.route.snapshot.paramMap.get('outil');
      this.trouverResultats();
      console.log(this.resultats);
      this.resultats2 =  [...new Set(this.resultats.map(it => it.type_ressource))]; });
  }

  deroulerListe(){
    this.listeDeroulante = !this.listeDeroulante;
    let rotate = `rotate(${this.degree}deg)`;
    this.renderer.setStyle(this.fleche.nativeElement, 'transform', rotate);
    this.degree = 180 - this.degree;
  }

  trouverResultats(){
    let fuse : any = new Fuse(this.boiteOutils, this.creerOptions('categorie_ressource'));
    this.resultats = fuse.search(this.outil);
    console.log(this.resultats);
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

  onNotify(message: any): void {
    const elts = this.el.nativeElement.querySelectorAll('#u999_div');
    elts.forEach(element => {element.classList.remove('selected'); });
    this.filtre = message.item;
    this.clicked = message.clicked;
  }
}
