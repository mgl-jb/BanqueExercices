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

  @ViewChild('ld', {static: false}) selectPage: ElementRef;
  listeDeroulante = false;
  constructor( private renderer: Renderer2) { }

  ngOnInit() {
  }
  deroulerListe(){
    this.listeDeroulante = !this.listeDeroulante;
  }

}
