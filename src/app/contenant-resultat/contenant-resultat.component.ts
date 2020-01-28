import { Component, OnInit, ElementRef, AfterViewInit, Renderer2, ViewChild, Input, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resultat } from '../home/home.component';

@Component({
  selector: 'app-contenant-resultat',
  templateUrl: './contenant-resultat.component.html',
  styleUrls: [
    '../shared/jquery-ui-themes.css',
    '../shared/axure_rp_page.css',
    '../shared/styles_data.css',
    './contenant-resultat.component.css']
})
export class ContenantResultatComponent {

  @Input() filtre: string;
  @Input() niveau: string;
  @Input() item: string;
  @Input() imageSrc: string;
  @Input() resultats: Resultat[];
  @Input() clicked: boolean;
  @Input() toutesCompetences: boolean;

  @ViewChild('parentDiv', {static: false}) parentDiv: ElementRef;
  @ViewChild('childDiv', {static: false}) childDiv: ElementRef;

  constructor(private route: ActivatedRoute, private renderer: Renderer2) { }


 /*  ngAfterViewChecked() {
    if (this.parentDiv && this.childDiv) {
      const height = `${this.childDiv.nativeElement.offsetHeight + 60 }px`;
      this.renderer.setStyle(this.parentDiv.nativeElement, 'height', height);
    }
  } */

  filterTable(table: any[], filter: string): Resultat[] {
    let table2: any;
    if (this.toutesCompetences) {
      const table3 = table.filter(it => it.competence === filter);
      table2 =  [...new Set(table3.map(it => it.theme))];
    } else {
      table2 = table.filter(it => it.sous_theme === filter);
    }
    return table2;
  }
}
