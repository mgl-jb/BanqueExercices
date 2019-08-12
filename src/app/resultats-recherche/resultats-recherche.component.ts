import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2,  AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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


  arrr=["hjgfghf","fhfjkhfehj fhhhhghghgg", "Le choix de l'adjectif",  "ljhdflhfh","fdvdgxxhdbn",
   "ssss piossrkojr", "khssjdfkfkkhjf", "hjgqfghf","fhfjkxxhfehj", "Le choix de l'adssjectif",  "ljhdflhssfh","fdvdghdbsssn"];
  constructor(private route: ActivatedRoute, private renderer: Renderer2) { }

  ngOnInit() {
    this.niveau = this.route.snapshot.paramMap.get('niveau');
    this.exercice = this.route.snapshot.paramMap.get('exercice');
    this.type = this.route.snapshot.paramMap.get('type');
  }

  onNotify(message: string): void {
    this.filtre = message;
    this.clicked = true;
  }

}
