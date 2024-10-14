import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseCvComponent } from './analyse-cv.component';

describe('AnalyseCvComponent', () => {
  let component: AnalyseCvComponent;
  let fixture: ComponentFixture<AnalyseCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyseCvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyseCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
