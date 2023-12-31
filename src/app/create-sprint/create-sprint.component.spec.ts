import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSprintComponent } from './create-sprint.component';

describe('CreateSprintComponent', () => {
  let component: CreateSprintComponent;
  let fixture: ComponentFixture<CreateSprintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSprintComponent]
    });
    fixture = TestBed.createComponent(CreateSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
