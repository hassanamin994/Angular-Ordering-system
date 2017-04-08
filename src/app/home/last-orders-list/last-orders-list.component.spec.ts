import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastOrdersListComponent } from './last-orders-list.component';

describe('LastOrdersListComponent', () => {
  let component: LastOrdersListComponent;
  let fixture: ComponentFixture<LastOrdersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastOrdersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastOrdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
