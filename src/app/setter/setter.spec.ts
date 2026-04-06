import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Setter } from './setter';

describe('Setter', () => {
  let component: Setter;
  let fixture: ComponentFixture<Setter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Setter],
    }).compileComponents();

    fixture = TestBed.createComponent(Setter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
