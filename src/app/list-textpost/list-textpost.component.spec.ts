import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTextpostComponent } from './list-textpost.component';

describe('ListTextpostComponent', () => {
  let component: ListTextpostComponent;
  let fixture: ComponentFixture<ListTextpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTextpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTextpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
