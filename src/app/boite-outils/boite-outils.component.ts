import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import Fuse from 'fuse.js';
import exercices from '../../assets/exercices.json';
import { ActivatedRoute } from '@angular/router';
import { Resultat } from '../home/home.component.js';

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

  exercices: Resultat[] = exercices;
  @ViewChild('fleche', {static: false}) fleche: ElementRef;
  listeDeroulante = false;
  degree = 180;
  options: any;
  resultats: Resultat[];
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
      this.resultats2 =  [...new Set(this.resultats.map(it => it.sous_theme))]; });
  }

  deroulerListe() {
    this.listeDeroulante = !this.listeDeroulante;
    const rotate = `rotate(${this.degree}deg)`;
    this.renderer.setStyle(this.fleche.nativeElement, 'transform', rotate);
    this.degree = 180 - this.degree;
  }

  trouverResultats() {
    const fuse: any = new Fuse(this.exercices, this.creerOptions('type'));
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
