import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordioncontainerComponent } from './accordioncontainer.component';

describe('AccordioncontainerComponent', () => {
  let component: AccordioncontainerComponent;
  let fixture: ComponentFixture<AccordioncontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordioncontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordioncontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
