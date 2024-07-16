import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkHourComponent } from './add-work-hour.component';

describe('AddWorkHourComponent', () => {
  let component: AddWorkHourComponent;
  let fixture: ComponentFixture<AddWorkHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddWorkHourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddWorkHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
