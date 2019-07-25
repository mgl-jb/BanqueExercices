import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import Fuse from 'fuse.js';
import { ResultatsRechercheComponent } from '../resultats-recherche/resultats-recherche.component';
import exercices from '../../assets/exercices.json';
import menuRecherche from '../../assets/menuRecherche.json';


export interface DialogData {
  niveau: string;
  sujet: string;
  exercice: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './jquery-ui-themes.css',
    './axure_rp_page.css',
    './styles_data.css',
    './styles_home.css'
  ]
})
export class HomeComponent implements OnInit {

  @ViewChild('t1', {static: false}) testView: ElementRef;
  @ViewChild('t2', {static: false}) testView2: ElementRef;
  @ViewChild('t3', {static: false}) testView3: ElementRef;


  exercices: any = exercices;
  // menurecherche: any = menuRecherche;
  menuRecherche = {
    'niveau débutant': {
      'jeux': ['la conjugaison ', 'la grammaire', 'le vocabulaire'],
      'grammaire': ['le français de base', 'les déterminants', 'les adjectifs qualificatifs', 'les prépositions',
        'les noms', 'les pronoms', 'les adverbes', 'la phrase'
      ],
      'verbes': ['Présent', 'Futur simple et futur proche', 'Passé composé et passé récent', 'Imparfait',
       'Verbes pronominaux', 'Verbes pronominaux'],
       'écoute et répetition': ['Langue et premiers mots', 'Thème '],
      'vocabulaire': ['Symboles et mots de base', 'Thèmes et situations '],
      'lecture' : ['Dictées', 'Quiz']
    },
    'niveau intermédiaire': {
      'jeux': ['Jeux de verbes ', 'Jeux de vocabulaire'],
      'grammaire': ['Les déterminants', 'Le genre et le nombre du nom', 'L\'adjectif', 'Les prépositions/mots-liens',
        'La phrase', 'Le texte', 'Les homophones (exercices)', 'Les homophones (explications)'
      ],
      'verbes': ['Verbes en ER - IR - RE ', 'Indicatif de verbes variés', 'Participe passé', 'Accord du participe passé avec le verbe Avoir',
       'Accord du participe passé avec le verbe Être', 'Accord du participe passé avec un verbe pronominal', 'Imparfait',
      'Passé composé', 'Imparfait ou Passé composé', 'Plus-que-parfait', 'Imparfait, Passé composé ou Plus-que-parfait', 'Conditionnel',
      'Hypothèse au présent', 'Subjonctif', 'Tests de conjugaison'],
       'écoute et répetition': ['Langue et premiers mots', 'Thème '],
       'Prononciation/compréhension orale' : ['Exercices de phonétique', 'Synonymes', 'Antonymes', 'Cas particuliers'],
      'vocabulaire': ['Vocabulaire thématique', 'Thèmes et situations '],
      'lecture' : ['Activités', 'Emploi', 'Médias et divers thèmes'],
      'Dictées / orthographe' : ['Textes lacunaires thématiques']
    },
    'niveau avancé': {
      'jeux': ['Jeux de verbes ', 'Jeux de grammaire (Chassez l’intrus)', 'Vocabulaire / divers', 'Jeux du pendu',
    'Jeux de correspondances'],
      'grammaire': ['Les déterminants', 'Le genre et le nombre du nom', 'Les adjectifs qualificatifs', 'Les adverbes',
        'L\'orthographe', 'Les pronoms relatifs', 'Les prépositions', 'Les conjonctions', 'La phrase',
        'L\'interrogation', 'Le texte', 'La ponctuation', 'Expressions à corriger', 'Analyse grammaticale', 'La Nominalisation',
        'Les homophones'
      ],
      'verbes': ['Nature du verbe', 'Mode indicatif', 'Mode infinitif et mode participe', 'Conditionnel passé', 'Subjonctif ou indicatif',
    'Accord du verbe ', 'Accord du participe passé ', 'Temps variés', 'Révision'],
       'écoute et répetition': ['Langue et premiers mots', 'Thème '],
       'compréhension orale' : ['Bandes annonces / reportages', 'Phonétique', 'Compréhension orale', 'Français parlé au Québec'],
      'vocabulaire': ['Synonymes', 'Quelques cas particuliers', 'Proverbes - Expressions - Définitions',
    'Emploi varié', 'Sens propre / figuré'],
      'lecture / comréhension ecrite' : ['?'],
      'Dictées et tests' : ['Dictées', 'Tests / Révision'],
      'Français des affaires' : ['Affaires et bureau']
    }
  };

  books = [{
    'title': "Old Man's War",
    'author': 'John Scalzi',
    'tags': ['fiction']
  }, {
    'title': 'The Lock Artist',
    'author': 'Steve',
    'tags': ['thriller']
  },

  {
    'lien' : 'http://jeudeloie.free.fr/debutant/etreavoir/oie.html',
    'niveau' : 'débutant',
    'exercice' : 'Jeux',
    'type'  : 'Jeux de conjugaison',
    'tags': ["etre" , "avoir", "jeux", "jeu", "grammaire", "conjugaison"]
  },
  {
    'lien' : 'http://www.alphabet.learningtogether.net/alphabet2/',
    'niveau' : 'débutant',
    'exercice' : 'Jeux',
    'type'  : 'Jeux de grammaire',
    'tags': ['alphabet', 'jeu', 'grammaire']
  },
  {
    'lien' : 'http://www2.csdm.qc.ca/William-Hingston/exj/articles/definis.htm',
    'niveau' : 'débutant',
    'exercice' : 'Jeux',
    'type'  : 'Jeux de grammaire',
    'tags': ['articles', 'défini', 'jeu', 'grammaire']
  },
  {
    'lien' : 'http://www2.csdm.qc.ca/William-Hingston/exj/articles/indefinis.htm',
    'niveau' : 'débutant',
    'exercice' : 'Jeux',
    'type'  : 'Jeux de grammaire',
    'tags': ['articles', 'indéfini', 'jeu', 'grammaire']
  },
  {
    'lien' : 'http://jeudeloie.free.fr/elementaire/genre/oie.html',
    'niveau' : 'débutant',
    'exercice' : 'Jeux',
    'type'  : 'Jeux de grammaire',
    'tags': ['genre', 'nom', 'jeu', 'grammaire']
  },
  {
    'lien' : 'http://jeudeloie.free.fr/debutant/negasimpl/oie.html',
    'niveau' : 'débutant',
    'exercice' : 'Jeux',
    'type'  : 'Jeux de grammaire',
    'tags': ['négation', 'simple', 'jeu', 'grammaire']
  },
  {
    'lien' : 'http://jeudeloie.free.fr/elementaire/bon/oie.html',
    'niveau' : 'débutant',
    'exercice' : 'Jeux',
    'type'  : 'Jeux de grammaire',
    'tags': ['Adverbe', 'bon', 'bien', 'mal', 'mauvais', 'jeu', 'grammaire']
  },
  {
    'lien' : 'https://www.ciel.fr/apprendre-francais/classe-fle.html',
    'niveau' : 'débutant',
    'exercice' : 'Jeux',
    'type'  : 'Jeux de grammaire',
    'tags': ['Phrase', 'étudiant', 'professeur', 'jeu', 'grammaire']
  },
  {
    'lien' : 'https://www.ciel.fr/apprendre-francais/classe-fle.html',
    'niveau' : 'débutant',
    'exercice' : 'Jeux',
    'type'  : 'Jeux de grammaire',
    'tags': ['Divers', 'révision', 'grammaticale', 'jeu', 'grammaire']
  },
];

  options = {
    keys: ['Type1', 'Type2', 'Type3']
  };

  u1Input: any;

  u4Input: any ;

  u6Input: any ;

  array1: any;

  array2: any;

  keys1: any;

  keys2: any;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }


  configurer_u4_input(u1: any) {
    this.keys1 = [];
    this.array2 = [];
    this.u1Input = u1;
    this.array1 = this.menuRecherche[this.u1Input];
    this.keys1 = Object.keys(this.array1);
    this.testView2.nativeElement.selectedIndex = 0;
    this.u4Input = this.keys1[0];
  }

  configurer_u6_input(u4: any) {
    this.array2 = [];
    this.u4Input = u4;
    this.array2 = this.menuRecherche[this.u1Input][this.u4Input];
    this.testView3.nativeElement.selectedIndex = 0;
    this.u6Input = this.array2[0];
  }

  myClick() {
    console.log('test');
    let fuse : any = new Fuse(this.exercices, this.options);
    var txt = this.u4Input;
    console.log(txt);
    console.log(fuse.search(txt));
  }

  myClick2(u6:any) {
    this.u6Input = u6;
    console.log(this.u6Input);
    // let index = this.testView2.nativeElement.selectedIndex;
    // let option = this.testView2.nativeElement.options[index];

    // console.log(option.innerText);
  }

  resetSelelction() {
    this.testView.nativeElement.selectedIndex = 0;
    this.keys1 = [];
    this.array2 = [];
  }
}
