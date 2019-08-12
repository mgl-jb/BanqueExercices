import { Component, OnInit, ElementRef, AfterViewInit, Renderer2, ViewChild, Input, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contenant-resultat',
  templateUrl: './contenant-resultat.component.html',
  styleUrls: [
    '../shared/jquery-ui-themes.css',
    '../shared/axure_rp_page.css',
    '../shared/styles_data.css',
    './contenant-resultat.component.css']
})
export class ContenantResultatComponent implements  AfterViewChecked {

  @Input() filtre: string;
  @Input() item: string;
  @Input() clicked: boolean;

  @ViewChild('parentDiv', {static: false}) parentDiv: ElementRef;
  @ViewChild('childDiv', {static: false}) childDiv: ElementRef;

  arrr=["hjgfghf","fhfjkhfehj bbbbb", "Le choix de l'adjectif",  "ljhdflhfh","fdvdghdbn",
   "ssss piorkojr", "khjdfkfkkhjf", "hjgfghf","fhfjkhfehj", "Le choix de l'adjectif",  "ljhdflhfh","fdvdghdbn"];

  constructor(private route: ActivatedRoute, private renderer: Renderer2) { }


  ngAfterViewChecked() {
    if (this.parentDiv && this.childDiv) {
      const height = `${this.childDiv.nativeElement.offsetHeight + 60 }px`;
      this.renderer.setStyle(this.parentDiv.nativeElement, 'height', height);
    }
  }
}
