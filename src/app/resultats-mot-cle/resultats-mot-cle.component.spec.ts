import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatsMotCleComponent } from './resultats-mot-cle.component';

describe('ResultatsMotCleComponent', () => {
  let component: ResultatsMotCleComponent;
  let fixture: ComponentFixture<ResultatsMotCleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultatsMotCleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatsMotCleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
