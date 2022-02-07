import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorComponentComponent } from './generator-component.component';

describe('GeneratorComponentComponent', () => {
  let component: GeneratorComponentComponent;
  let fixture: ComponentFixture<GeneratorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratorComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
