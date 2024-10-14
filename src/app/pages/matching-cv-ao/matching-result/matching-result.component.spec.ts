import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingResultComponent } from './matching-result.component';

describe('MatchingResultComponent', () => {
  let component: MatchingResultComponent;
  let fixture: ComponentFixture<MatchingResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchingResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchingResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
