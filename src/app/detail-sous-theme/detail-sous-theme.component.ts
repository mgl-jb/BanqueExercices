import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resultat } from 'app/home/home.component';
import Fuse from 'fuse.js';
import exercices from 'assets/exercices.json';

@Component({
  selector: 'app-detail-sous-theme',
  templateUrl: './detail-sous-theme.component.html',
  styleUrls: ['./detail-sous-theme.component.css']
})
export class DetailSousThemeComponent implements OnInit {

  exercices: Resultat[] = exercices;
  niveau: string;
  exercice: string;
  theme: string;
  sousTheme: string;
  sousType: string;
  item: string;
  options: any;
  @Input() imageSrc: string;
  resultats: any;
  resultats2: any;
  @Input() clicked: boolean;
  @Input() toutesCompetences: boolean;


  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.niveau = this.route.snapshot.paramMap.get('niveau');
      this.exercice = this.route.snapshot.paramMap.get('exercice');
      this.theme = this.route.snapshot.paramMap.get('theme');
      this.sousType = this.route.snapshot.paramMap.get('soustype');
      this.toutesCompetences = (this.exercice === 'toutes les compétences');
      this.item = this.route.snapshot.paramMap.get('item');
      this.trouverResultats();
    });

  }


  trouverResultats() {

    if (this.niveau) {
      const fuse1: any = new Fuse(this.exercices, this.creerOptions('niveau'));
      if (this.toutesCompetences) {
        this.resultats = fuse1.search(this.niveau);
        this.resultats2 = [...new Set(this.resultats.map(it => it.competence).filter(i => i !== ''))];
      } else {
        const tab1 = fuse1.search(this.niveau);
        const fuse2: any = new Fuse(tab1, this.creerOptions('competence'));
        this.resultats = fuse2.search(this.exercice).filter(it => it.type === 'Exercice');
        if (this.theme !== '') {
          const fuse3: any = new Fuse(this.resultats, this.creerOptions('theme'));
          this.resultats = fuse3.search(this.theme);
        }
      }
    } else if (this.sousType) {
      const fuseSoustype: any = new Fuse(this.exercices, this.creerOptions('sous_type'));
      const tabSoustype = fuseSoustype.search(this.sousType);
      const fuseItem: any = new Fuse(tabSoustype, this.creerOptions('sous_theme'));
      this.resultats = fuseItem.search(this.item);
    } else {
      const fuse: any = new Fuse(this.exercices, this.creerOptions('sous_theme'));
      this.resultats = fuse.search(this.item);
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

  filterTable(table: any[], filter: string): Resultat[] {
    let table2: any;
    if (this.toutesCompetences) {
      const table3 = table.filter(it => it.competence === filter);
      table2 = [...new Set(table3.map(it => it.theme))];
    } else {
      table2 = table.filter(it => it.sous_theme === filter);
    }
    console.log(table2);
    return table2;
  }

}
