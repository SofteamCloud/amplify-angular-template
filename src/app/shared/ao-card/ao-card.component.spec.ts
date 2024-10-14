import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AoCardComponent } from './ao-card.component';

describe('AoCardComponent', () => {
  let component: AoCardComponent;
  let fixture: ComponentFixture<AoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
