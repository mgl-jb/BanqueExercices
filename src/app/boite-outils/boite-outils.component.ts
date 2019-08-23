import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-boite-outils',
  templateUrl: './boite-outils.component.html',
  styleUrls: [
    '../shared/jquery-ui-themes.css',
    '../shared/axure_rp_page.css',
    '../shared/styles_data.css',
    './boite-outils.component.css']
})
export class BoiteOutilsComponent implements OnInit {

  @ViewChild('fleche', {static: false}) fleche: ElementRef;
  listeDeroulante = false;
  degree = 180;
  constructor( private renderer: Renderer2) { }

  ngOnInit() {
  }
  deroulerListe(){
    this.listeDeroulante = !this.listeDeroulante;
    let rotate = `rotate(${this.degree}deg)`;
    this.renderer.setStyle(this.fleche.nativeElement, 'transform', rotate);
    this.degree = 180 - this.degree;
  }

}
