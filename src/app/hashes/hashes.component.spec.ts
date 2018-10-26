import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashesComponent } from './hashes.component';

describe('HashesComponent', () => {
  let component: HashesComponent;
  let fixture: ComponentFixture<HashesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
