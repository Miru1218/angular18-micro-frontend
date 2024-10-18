import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Go2Component } from './go2.component';

describe('Go2Component', () => {
  let component: Go2Component;
  let fixture: ComponentFixture<Go2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Go2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Go2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
