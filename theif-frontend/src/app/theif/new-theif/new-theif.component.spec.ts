import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTheifComponent } from './new-theif.component';

describe('NewTheifComponent', () => {
  let component: NewTheifComponent;
  let fixture: ComponentFixture<NewTheifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTheifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTheifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
