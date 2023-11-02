import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAtomsComponent } from './ng-atoms.component';

describe('NgAtomsComponent', () => {
  let component: NgAtomsComponent;
  let fixture: ComponentFixture<NgAtomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgAtomsComponent]
    });
    fixture = TestBed.createComponent(NgAtomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
