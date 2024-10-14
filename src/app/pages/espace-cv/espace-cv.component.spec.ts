import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceCvComponent } from './espace-cv.component';

describe('EspaceCvComponent', () => {
  let component: EspaceCvComponent;
  let fixture: ComponentFixture<EspaceCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspaceCvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
