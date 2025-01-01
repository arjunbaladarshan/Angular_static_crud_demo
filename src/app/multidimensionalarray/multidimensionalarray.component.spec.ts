import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultidimensionalarrayComponent } from './multidimensionalarray.component';

describe('MultidimensionalarrayComponent', () => {
  let component: MultidimensionalarrayComponent;
  let fixture: ComponentFixture<MultidimensionalarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultidimensionalarrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultidimensionalarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
