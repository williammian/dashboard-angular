import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelSimplesComponent } from './painel-simples.component';

describe('PainelSimplesComponent', () => {
  let component: PainelSimplesComponent;
  let fixture: ComponentFixture<PainelSimplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelSimplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
