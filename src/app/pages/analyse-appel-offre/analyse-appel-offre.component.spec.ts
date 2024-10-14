import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseAppelOffreComponent } from './analyse-appel-offre.component';

describe('AnalyseAppelOffreComponent', () => {
  let component: AnalyseAppelOffreComponent;
  let fixture: ComponentFixture<AnalyseAppelOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyseAppelOffreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyseAppelOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
