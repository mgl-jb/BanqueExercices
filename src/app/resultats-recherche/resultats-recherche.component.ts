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
export class ResultatsRechercheComponent implements OnInit, AfterViewInit {

  niveau: string;
  exercice: string;
  type: string;
  filtre: string;

  @ViewChild('parentDiv', {static: false}) parentDiv: ElementRef;
  @ViewChild('childDiv', {static: false}) childDiv: ElementRef;

  arrr=["hjgfghf","fhfjkhfehj fhhhhghghgg", "Le choix de l'adjectif",  "ljhdflhfh","fdvdghdbn",
   "ssss piorkojr", "khjdfkfkkhjf", "hjgfghf","fhfjkhfehj", "Le choix de l'adjectif",  "ljhdflhfh","fdvdghdbn"];
  constructor(private route: ActivatedRoute, private renderer: Renderer2) { }

  ngOnInit() {
    this.niveau = this.route.snapshot.paramMap.get('niveau');
    this.exercice = this.route.snapshot.paramMap.get('exercice');
    this.type = this.route.snapshot.paramMap.get('type');
  }

  ngAfterViewInit() {
    if (this.parentDiv && this.childDiv) {
      var height = `${this.parentDiv.nativeElement.offsetHeight + 50 }px`;
      this.renderer.setStyle(this.parentDiv.nativeElement, 'height', height);
    }
  }
  onNotify(message: string): void {
    this.filtre = message;
  }

}
