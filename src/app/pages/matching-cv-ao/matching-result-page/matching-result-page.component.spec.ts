import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingResultPageComponent } from './matching-result-page.component';

describe('MatchingResultPageComponent', () => {
  let component: MatchingResultPageComponent;
  let fixture: ComponentFixture<MatchingResultPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchingResultPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchingResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
