import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenantResultatComponent } from './contenant-resultat.component';

describe('ContenantResultatComponent', () => {
  let component: ContenantResultatComponent;
  let fixture: ComponentFixture<ContenantResultatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenantResultatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenantResultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
