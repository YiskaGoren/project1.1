import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InveiterComponent } from './inveiter.component';

describe('InveiterComponent', () => {
  let component: InveiterComponent;
  let fixture: ComponentFixture<InveiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InveiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InveiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
