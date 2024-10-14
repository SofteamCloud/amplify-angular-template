import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingListComponent } from './matching-list.component';

describe('MatchingListComponent', () => {
  let component: MatchingListComponent;
  let fixture: ComponentFixture<MatchingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchingListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
