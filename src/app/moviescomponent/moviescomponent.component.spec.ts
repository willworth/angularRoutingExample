import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviescomponentComponent } from './moviescomponent.component';

describe('MoviescomponentComponent', () => {
  let component: MoviescomponentComponent;
  let fixture: ComponentFixture<MoviescomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviescomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviescomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
