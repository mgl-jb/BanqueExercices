import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import Fuse from 'fuse.js';
import exercices from 'assets/exercices.json';
import { ActivatedRoute } from '@angular/router';
import { Resultat } from '../home/home.component.js';
import { RechercheService } from 'app/shared/services/recherche.service.js';

@Component({
  selector: 'app-francais-specialise',
  templateUrl: './francais-specialise.component.html',
  styleUrls: [
    '../shared/jquery-ui-themes.css',
    '../shared/axure_rp_page.css',
    '../shared/styles_data.css',
    './francais-specialise.component.css']
})
export class FrancaisSpecialiseComponent implements OnInit {

  exercices: any[] = exercices;
  @ViewChild('fleche', {static: false}) fleche: ElementRef;
  listeDeroulante = false;
  degree = 180;
  options: any;
  resultats: Resultat[];
  resultats2: string[];
  type: string;
  filtre: string;
  clicked = false;
  filtred = false;
  pageColor = '#FF9D4B';
  highlightColor = '#FFDFC4';
  imageSrc = 'assets/images/u61.png';

  constructor( private route: ActivatedRoute,
               private renderer: Renderer2,
               private el: ElementRef,
               private rechercheService: RechercheService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
    this.type = this.route.snapshot.paramMap.get('type');
    this.trouverResultats();
    this.resultats2 =  [...new Set(this.resultats.map(it => it.sous_theme))]; });
  }

  deroulerListe() {
    this.listeDeroulante = !this.listeDeroulante;
    const rotate = `rotate(${this.degree}deg)`;
    this.renderer.setStyle(this.fleche.nativeElement, 'transform', rotate);
    this.degree = 180 - this.degree;
  }

  getResults(): void {
    this.resultats = this.rechercheService.trouverResultatsType(this.type);
  }

  trouverResultats() {
    const fuse: any = new Fuse(this.exercices, this.creerOptions('sous_type'));
    this.resultats = fuse.search(this.type);
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
