import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2,  AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {Resultat} from '../home/home.component';


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

  niveau: string;
  exercice: string;
  type: string;
  filtre: string;
  clicked = false;
  resultats: Resultat[];
  resultats2: string[];
  constructor(private route: ActivatedRoute, private renderer: Renderer2) { }


  ngOnInit() {
    this.niveau = this.route.snapshot.paramMap.get('niveau');
    this.exercice = this.route.snapshot.paramMap.get('exercice');
    this.type = this.route.snapshot.paramMap.get('type');
    this.resultats = this.route.snapshot.data.resultats as Resultat[];
    this.resultats2 =  [...new Set(this.resultats.map(it => it.activite))];
    }

  onNotify(message: any): void {
    this.filtre = message.item;
    this.clicked = message.clicked;
  }
}
