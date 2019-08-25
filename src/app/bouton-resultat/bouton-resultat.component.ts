import {
  Component,
  OnInit,
  ElementRef,
  AfterViewInit,
  ViewChild,
  Renderer2,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resultat } from '../home/home.component';

@Component({
  selector: 'app-bouton-resultat',
  templateUrl: './bouton-resultat.component.html',
  styleUrls: [
    '../shared/jquery-ui-themes.css',
    '../shared/axure_rp_page.css',
    '../shared/styles_data.css',
    './bouton-resultat.component.css'
  ]
})
export class BoutonResultatComponent implements AfterViewInit {
  @ViewChild('parentDiv', { static: false }) parentDiv: ElementRef;
  @ViewChild('childDiv', { static: false }) childDiv: ElementRef;
  @ViewChild('textEl', { static: false }) textEl: ElementRef;
  @ViewChild('spanEl', { static: false }) spanEl: ElementRef;

  @Input() color;
  @Input() item: string;
  @Input() highlightColor: string;

  @Output() notify: EventEmitter<any> = new EventEmitter<any>();


  clicked = false;

  constructor(private route: ActivatedRoute, private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (this.parentDiv && this.childDiv) {
      const width = `${this.spanEl.nativeElement.offsetWidth + 20}px`;
      this.renderer.setStyle(this.childDiv.nativeElement, 'width', width);
      this.renderer.setStyle(this.parentDiv.nativeElement, 'width', width);
      this.renderer.setStyle(this.childDiv.nativeElement, 'border-color', this.color);
      this.renderer.setStyle(this.childDiv.nativeElement, 'color', this.color);
    }
  }

  onClick() {
    this.clicked = !this.clicked;
    this.notify.emit({clicked : this.clicked, item: this.item});
  }
}
