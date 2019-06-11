import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TribuneComponent } from './tribune.component';

describe('TribuneComponent', () => {
  let component: TribuneComponent;
  let fixture: ComponentFixture<TribuneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TribuneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TribuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
