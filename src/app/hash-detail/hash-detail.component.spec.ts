import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashDetailComponent } from './hash-detail.component';

describe('HashDetailComponent', () => {
  let component: HashDetailComponent;
  let fixture: ComponentFixture<HashDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
