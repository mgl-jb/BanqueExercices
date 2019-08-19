import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resultat } from '../home/home.component';

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
    this.resultats = this.route.snapshot.data.resultats as Resultat[];
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
}
