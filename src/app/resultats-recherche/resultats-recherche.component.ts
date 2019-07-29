import { Component, OnInit, Input } from '@angular/core';
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

  arrr=["hjgfghf","fhfjkhfehj", "piorkojr", "khjdfkfkkhjf ddddddd ffff", "ljhdflhfh","fdvdghdbn ddddd","hjgfghf","fhfjkhfehj ddddd", "Le choix de l'adjectif", "khjdfkfkkhjf", "ljhdflhfh","fdvdghdbn","hjgfghf","fhfjkhfehj", "piorkojr", "khjdfkfkkhjf", "ljhdflhfh","fdvdghdbn",
  "hjgfghf","fhfjkhfehj", "ssss piorkojr", "khjdfkfkkhjf", "ljhdflhfh ss","fdvdghdbn"];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.niveau = this.route.snapshot.paramMap.get('niveau');
    this.exercice = this.route.snapshot.paramMap.get('exercice');
    this.type = this.route.snapshot.paramMap.get('type');
  }

}
