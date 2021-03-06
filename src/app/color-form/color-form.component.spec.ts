import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorFormComponent } from './color-form.component';

describe('ColorFormComponent', () => {
  let component: ColorFormComponent;
  let fixture: ComponentFixture<ColorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
