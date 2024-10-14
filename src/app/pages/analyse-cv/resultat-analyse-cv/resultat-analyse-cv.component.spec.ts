import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatAnalyseCvComponent } from './resultat-analyse-cv.component';

describe('ResultatAnalyseCvComponent', () => {
  let component: ResultatAnalyseCvComponent;
  let fixture: ComponentFixture<ResultatAnalyseCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultatAnalyseCvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultatAnalyseCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
