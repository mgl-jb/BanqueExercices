import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resultat } from '../home/home.component';
import Fuse from 'fuse.js';
import exercices from '../../assets/exercices.json';

@Component({
  selector: 'app-resultats-mot-cle',
  templateUrl: './resultats-mot-cle.component.html',
  styleUrls: [
    '../shared/jquery-ui-themes.css',
  '../shared/axure_rp_page.css',
  '../shared/styles_data.css',
  './resultats-mot-cle.component.css']
})
export class ResultatsMotCleComponent implements OnInit {

  exercices: Resultat[] = exercices;
  options: any;
  clicked = false;
  filtred = false;
  filtreNiveau: string;
  resultats: Resultat[];
  resultats2: string[];
  motCle: string;
  resultats3: string[];
  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    this.motCle = this.route.snapshot.paramMap.get('motCle');
    this.trouverResultatsMotCle();
    this.resultats2 =  [...new Set(this.resultats.map(it => it.activite))];
    this.resultats3 =  [...new Set(this.resultats.map(it => it.niveau))];
    console.log(this.resultats);
    }

  filterTableParActivite(table: Resultat[], filter: string) : Resultat[]{
    let table2 = table.filter(it => it.activite === filter);
    return table2;
  }

  filterTableParNiveau(table: Resultat[], filter: string) : Resultat[]{
    let table2 = table.filter(it => it.niveau === filter);
    return table2;
  }

  mapTableParNiveau(table: Resultat[]){
    return  [...new Set(table.map(it => it.niveau))];
  }

  mapTableParActivite(table: Resultat[]){
    return  [...new Set(table.map(it => it.activite))];
  }

  filtrerParNiveau(niveau: string){
    console.log(niveau);
    this.filtreNiveau = niveau;
    this.filtred = true;
  }

  trouverResultatsMotCle(){
    let fuse : any = new Fuse(this.exercices, this.creerOptions('mot_cle'));
    this.resultats = fuse.search(this.motCle);
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
