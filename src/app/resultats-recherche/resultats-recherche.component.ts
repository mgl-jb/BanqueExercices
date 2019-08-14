import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2,  AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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
  resultats: any;

  constructor(private route: ActivatedRoute, private renderer: Renderer2) { }

  ngOnInit() {
    this.niveau = this.route.snapshot.paramMap.get('niveau');
    this.exercice = this.route.snapshot.paramMap.get('exercice');
    this.type = this.route.snapshot.paramMap.get('type');
    // this.resultats = this.route.snapshot.data;
    // this.route.data.subscribe(
    //   resultats => this.resultats = resultats;
    //   );
    // this.route.data.pipe(
    //   switchMap(params => {
    //     this.resultats = params.get();
    //     return this.resultats;
    //   })
    // );
    // console.log(this.resultats);
    }

  onNotify(message: string): void {
    this.filtre = message;
    this.clicked = true;
  }

}
