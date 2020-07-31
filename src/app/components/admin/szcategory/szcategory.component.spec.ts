import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzcategoryComponent } from './szcategory.component';

describe('SzcategoryComponent', () => {
  let component: SzcategoryComponent;
  let fixture: ComponentFixture<SzcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
