import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustcompoComponent } from './custcompo.component';

describe('CustcompoComponent', () => {
  let component: CustcompoComponent;
  let fixture: ComponentFixture<CustcompoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustcompoComponent]
    });
    fixture = TestBed.createComponent(CustcompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
