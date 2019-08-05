import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoiteOutilsComponent } from './boite-outils.component';

describe('BoiteOutilsComponent', () => {
  let component: BoiteOutilsComponent;
  let fixture: ComponentFixture<BoiteOutilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoiteOutilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoiteOutilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
