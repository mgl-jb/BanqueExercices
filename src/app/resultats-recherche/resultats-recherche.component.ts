import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2,  AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import Fuse from 'fuse.js';
import {Resultat} from '../home/home.component';
import exercices from '../../assets/exercices.json';


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
  type: string;
  filtre: string;
  clicked = false;
  resultats: Resultat[];
  resultats2: string[];
  options: any;

  constructor(private route: ActivatedRoute, private renderer: Renderer2, private el: ElementRef) { }


  ngOnInit() {
    this.niveau = this.route.snapshot.paramMap.get('niveau');
    this.exercice = this.route.snapshot.paramMap.get('exercice');
    this.type = this.route.snapshot.paramMap.get('type');
    //this.resultats = this.route.snapshot.data.resultats as Resultat[];
    this.trouverResultats();
    this.resultats2 =  [...new Set(this.resultats.map(it => it.activite))];
    }

  onNotify(message: any): void {
    const elts = this.el.nativeElement.querySelectorAll('#u999_div');
    elts.forEach(element => {element.classList.remove('selected'); });
    this.filtre = message.item;
    this.clicked = message.clicked;
  }
  trouverResultats(){
    let fuse1 : any = new Fuse(this.exercices, this.creerOptions('niveau'));
    let tab1 = fuse1.search(this.niveau);
    let fuse2 : any = new Fuse(tab1, this.creerOptions('competence'));
    let tab2 = fuse2.search(this.exercice);
    let fuse3 : any = new Fuse(tab2, this.creerOptions('sur1'));
    this.resultats = fuse3.search(this.type);
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
