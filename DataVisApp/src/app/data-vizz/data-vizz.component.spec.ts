import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataVizzComponent } from './data-vizz.component';

describe('DataVizzComponent', () => {
  let component: DataVizzComponent;
  let fixture: ComponentFixture<DataVizzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataVizzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataVizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
