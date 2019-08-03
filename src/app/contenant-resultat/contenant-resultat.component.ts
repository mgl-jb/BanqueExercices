import { Component, OnInit, ElementRef, AfterViewInit, Renderer2, ViewChild } from '@angular/core';
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
export class ContenantResultatComponent implements  AfterViewInit {

  @ViewChild('parentDiv', {static: false}) parentDiv: ElementRef;
  @ViewChild('childDiv', {static: false}) childDiv: ElementRef;

  arrr=["hjgfghf","fhfjkhfehj", "Le choix de l'adjectif",  "ljhdflhfh","fdvdghdbn",
   "ssss piorkojr", "khjdfkfkkhjf", "hjgfghf","fhfjkhfehj", "Le choix de l'adjectif",  "ljhdflhfh","fdvdghdbn"];
  constructor(private route: ActivatedRoute, private renderer: Renderer2) { }


  ngAfterViewInit() {
    if (this.parentDiv && this.childDiv) {
      let height = `${this.parentDiv.nativeElement.offsetHeight + 40 }px`;
      this.renderer.setStyle(this.parentDiv.nativeElement, 'height', height);
    }
  }
}
