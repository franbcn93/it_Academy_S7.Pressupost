import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPanellComponent } from './component-panell.component';

describe('ComponentPanellComponent', () => {
  let component: ComponentPanellComponent;
  let fixture: ComponentFixture<ComponentPanellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentPanellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentPanellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
