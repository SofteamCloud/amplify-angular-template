import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingCvAoComponent } from './matching-cv-ao.component';

describe('MatchingCvAoComponent', () => {
  let component: MatchingCvAoComponent;
  let fixture: ComponentFixture<MatchingCvAoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchingCvAoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchingCvAoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
