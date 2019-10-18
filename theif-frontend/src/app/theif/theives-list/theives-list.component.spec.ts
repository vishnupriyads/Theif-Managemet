import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheivesListComponent } from './theives-list.component';

describe('TheivesListComponent', () => {
  let component: TheivesListComponent;
  let fixture: ComponentFixture<TheivesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheivesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheivesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
