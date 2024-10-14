import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceAppelOffreComponent } from './espace-appel-offre.component';

describe('EspaceAppelOffreComponent', () => {
  let component: EspaceAppelOffreComponent;
  let fixture: ComponentFixture<EspaceAppelOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspaceAppelOffreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceAppelOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
