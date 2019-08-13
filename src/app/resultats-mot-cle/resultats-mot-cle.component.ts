import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultats-mot-cle',
  templateUrl: './resultats-mot-cle.component.html',
  styleUrls: [
    '../shared/jquery-ui-themes.css',
  '../shared/axure_rp_page.css',
  '../shared/styles_data.css',
  './resultats-mot-cle.component.css']
})
export class ResultatsMotCleComponent implements OnInit {

  clicked = false;

  arrr=["lkjk","lki", "jygdkj", "dkhgdjhd","hdhhjdkjd", "dhhdkljdl", "jkhdjhd","lkjk","lki", "jygdkj"];
  constructor() { }

  ngOnInit() {
  }

}
