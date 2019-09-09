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

  exercices: any[] = exercices;
  options: any;
  clicked = false;
  filtred = false;
  filtredType = false;
  filtredCompetence = false;
  filtre: string;
  filtreNiveau: string;
  filtreType: string;
  filtreCompetence: string;
  resultats: Resultat[];
  resultats2: string[];
  motCle: string;
  resultats3: string[];
  imageSrc = '../../assets/images/u129.png';
  resultats4: any[];
  resultats5: any[];

  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    this.motCle = this.route.snapshot.paramMap.get('motCle');
    this.trouverResultatsMotCle();
    this.resultats2 =  [...new Set(this.resultats.map(it => it.activite))];
    this.resultats3 =  [...new Set(this.resultats.map(it => it.niveau))];
    this.resultats4 =  [...new Set(this.resultats.map(it => it.type))];
    this.resultats5 =  [...new Set(this.resultats.map(it => it.competence))];
    }

  filterTableParActivite(table: Resultat[], filter: string) : Resultat[]{
    let table2 = table.filter(it => it.activite === filter);
    return table2;
  }

  filterTableParNiveau(table: Resultat[], filter: string) : Resultat[]{
    let table2 = table.filter(it => it.niveau === filter);
    return table2;
  }

  filterTableParType(table: Resultat[], filter: string) : Resultat[]{
    let table2 = table.filter(it => it.type === filter);
    return table2;
  }

  filterTableParCompetence(table: Resultat[], filter: string) : Resultat[]{
    let table2 = table.filter(it => it.competence === filter);
    return table2;
  }

  mapTableParNiveau(table: Resultat[]){
    return  [...new Set(table.map(it => it.niveau))];
  }

  mapTableParActivite(table: Resultat[]){
    return  [...new Set(table.map(it => it.activite))];
  }

  mapTableParType(table: Resultat[]){
    return  [...new Set(table.map(it => it.type))];
  }

  mapTableParCompetence(table: Resultat[]){
    return  [...new Set(table.map(it => it.competence))];
  }

  filtrerParNiveau(niveau: string){
    console.log(niveau);
    this.filtreNiveau = niveau;
    this.filtred = true;
    this.filtredType = false;
    this.filtredCompetence = false;
  }

  filtrerParType(niveau: string){
    console.log(niveau);
    this.filtreType = niveau;
    this.filtredType = true;
    this.filtredCompetence = false;
  }

  filtrerParCompetence(niveau: string){
    console.log(niveau);
    this.filtreCompetence = niveau;
    this.filtredCompetence = true;
    this.filtredType = false;
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
