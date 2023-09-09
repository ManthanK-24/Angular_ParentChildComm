import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcustcompoComponent } from './childcustcompo.component';

describe('ChildcustcompoComponent', () => {
  let component: ChildcustcompoComponent;
  let fixture: ComponentFixture<ChildcustcompoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildcustcompoComponent]
    });
    fixture = TestBed.createComponent(ChildcustcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
