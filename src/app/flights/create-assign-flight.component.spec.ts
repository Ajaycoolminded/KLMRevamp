import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAssignFlightComponent } from './create-assign-flight.component';

describe('CreateAssignFlightComponent', () => {
  let component: CreateAssignFlightComponent;
  let fixture: ComponentFixture<CreateAssignFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAssignFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAssignFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
