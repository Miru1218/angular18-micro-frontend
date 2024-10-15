import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Go1Component } from './go1.component';

describe('Go1Component', () => {
  let component: Go1Component;
  let fixture: ComponentFixture<Go1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Go1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Go1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
