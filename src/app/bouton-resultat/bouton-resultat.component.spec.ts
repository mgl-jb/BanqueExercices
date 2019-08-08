import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonResultatComponent } from './bouton-resultat.component';

describe('BoutonResultatComponent', () => {
  let component: BoutonResultatComponent;
  let fixture: ComponentFixture<BoutonResultatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoutonResultatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonResultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
