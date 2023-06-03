import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionelementComponent } from './accordionelement.component';

describe('AccordionelementComponent', () => {
  let component: AccordionelementComponent;
  let fixture: ComponentFixture<AccordionelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionelementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
