import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntheseGraphiqueComponent } from './synthese-graphique.component';

describe('SyntheseGraphiqueComponent', () => {
  let component: SyntheseGraphiqueComponent;
  let fixture: ComponentFixture<SyntheseGraphiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyntheseGraphiqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyntheseGraphiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
