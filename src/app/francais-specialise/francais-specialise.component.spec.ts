import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrancaisSpecialiseComponent } from './francais-specialise.component';

describe('FrancaisSpecialiseComponent', () => {
  let component: FrancaisSpecialiseComponent;
  let fixture: ComponentFixture<FrancaisSpecialiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrancaisSpecialiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrancaisSpecialiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
