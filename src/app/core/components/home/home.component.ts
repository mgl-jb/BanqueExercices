import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as Fuse from 'fuse.js';

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

  valeursMenuRechecheExercices = {
    'niveau débutant': {
      'les jeux': ['la conjugaison ', 'la grammaire', 'le vocabulaire'],
      'la grammaire': ['le français de base', 'les déterminants', 'les adjectifs qualificatifs', 'les prépositions',
        'les noms', 'les pronoms', 'les adverbes', 'la phrase'
      ],
      '1.3': ['1.3.1', '1.3.2', '1.3.3']
    },
    'niveau intermédiaire': {
      '2.1': ['2.1.1', '2.1.2', '2.1.3'],
      '2.2': ['2.2.1', '2.2.2', '2.2.3'],
      '2.3': ['2.3.1', '2.3.2', '2.3.3']
    },
    'niveau avancé': {
      '3.1': ['3.1.1', '3.1.2', '3.1.3'],
      '3.2': ['3.2.1', '3.2.2', '3.2.3'],
      '3.3': ['3.3.1', '3.3.2', '3.3.3']
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
  }];

  options = {
    keys: ['author', 'tags']
  };

  u1Input: any;

  u4Input: any ;

  u6Input: any ;

  array1: any;

  array2: any;

  keys1: any;

  keys2: any;

  @ViewChild('testViewChild', {static: false}) testView: ElementRef;
  @ViewChild('t2', {static: false}) testView2: ElementRef;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  afficherResultats() {
    this.router.navigate(['resultats-rech']);
  }

  createOption(u1Input, text, value) {
    let opt = document.createElement('option');
    opt.value = value;
    opt.text = text;
    u1Input.options.add(opt);
  }

  createOptions(optionsArray, u1Input) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < optionsArray.length; i++) {
      this.createOption(u1Input, optionsArray[i], optionsArray[i]);
    }
  }

  resetSelelction() {
    let dropDown = this.testView2.nativeElement;
    console.log(dropDown.option);
    // dropDown.selectedIndex = 0;
    // const dropDown2 = document.getElementById('u4Input') as HTMLSelectElement;
    // dropDown2.options.length = 0;
    // const dropDown3 = document.getElementById('u6Input') as HTMLSelectElement;
    // dropDown3.options.length = 0;
  }


  configurer_u4_input(u1: any) {
    this.u1Input = u1;
    this.array1 = this.valeursMenuRechecheExercices[this.u1Input];
    this.keys1 = Object.keys(this.array1);
    // let u4Input = document.getElementById('u4_input') as HTMLSelectElement;
    // let u6Input = document.getElementById('u6_input') as HTMLSelectElement;
    // u4Input.options.length = 0;
    // u6Input.options.length = 0;
    // this.createOption(u4Input, "xxx", "yyyy");
    // const u4InputKeys = Object.keys(this.valeursMenuRechecheExercices[u1Input.value]);
    // this.createOptions(u4InputKeys, u4Input);
  }

  configurer_u6_input(u4: any) {
    this.u4Input = u4;
    this.array2 = this.valeursMenuRechecheExercices[this.u1Input][this.u4Input];
    console.log(this.array2);
    // let u1Input = document.getElementById('u1_input') as HTMLSelectElement;
    // let u4Input = document.getElementById('u4_input') as HTMLSelectElement;
    // let u6Input = document.getElementById('u6_input') as HTMLSelectElement;
    // u6Input.options.length = 0;
    // this.createOption(u6Input, "choisir", "");
    // const u6InputKeys = this.valeursMenuRechecheExercices[u1Input.value][u4Input.value];
    // this.createOptions(u6InputKeys, u6Input);
  }

  myClick() {
    console.log('test');
    // var fuse = new Fuse(this.books, this.options)
    // var txt = document.getElementById('u51_input') as HTMLInputElement;
    // console.log(txt.value);
    // console.log(fuse.search(txt.value));
  }

  myClick2() {
    // var fuse = new Fuse(books, options)
    var e1 = document.getElementById("u1Input") as HTMLSelectElement;
    var txt1 = e1.options[e1.selectedIndex].text;
    var e2 = document.getElementById("u4Input") as HTMLSelectElement;;
    var txt2 = e2.options[e2.selectedIndex].text;
    var e3 = document.getElementById("u6Input") as HTMLSelectElement;;
    var txt3 = e3.options[e3.selectedIndex].text;
    console.log(txt1 + txt2 + txt3);
    //console.log(fuse.search(txt1 + txt2 + txt3));
  }}
