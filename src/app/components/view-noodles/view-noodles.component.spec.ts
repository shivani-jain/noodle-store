import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNoodlesComponent } from './view-noodles.component';

describe('ViewNoodlesComponent', () => {
  let component: ViewNoodlesComponent;
  let fixture: ComponentFixture<ViewNoodlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNoodlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNoodlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
