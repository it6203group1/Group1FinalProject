import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTextpostFormComponent } from './new-textpost-form.component';

describe('NewTextpostFormComponent', () => {
  let component: NewTextpostFormComponent;
  let fixture: ComponentFixture<NewTextpostFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTextpostFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTextpostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
