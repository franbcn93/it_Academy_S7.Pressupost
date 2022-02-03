import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruccionsComponentComponent } from './instruccions-component.component';

describe('InstruccionsComponentComponent', () => {
  let component: InstruccionsComponentComponent;
  let fixture: ComponentFixture<InstruccionsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstruccionsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstruccionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
