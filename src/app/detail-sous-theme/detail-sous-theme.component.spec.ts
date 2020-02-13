import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSousThemeComponent } from './detail-sous-theme.component';

describe('DetailSousThemeComponent', () => {
  let component: DetailSousThemeComponent;
  let fixture: ComponentFixture<DetailSousThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSousThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSousThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
