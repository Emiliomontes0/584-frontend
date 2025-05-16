import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarMakeListComponent } from './car-make-list.component';

describe('CarMakeListComponent', () => {
  let component: CarMakeListComponent;
  let fixture: ComponentFixture<CarMakeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarMakeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarMakeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
