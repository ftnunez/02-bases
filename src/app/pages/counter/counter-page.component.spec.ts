import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPageComponent } from './counter-page.component';

describe('CounterPageComponent', () => {
  let component: CounterPageComponent;
  let fixture: ComponentFixture<CounterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
