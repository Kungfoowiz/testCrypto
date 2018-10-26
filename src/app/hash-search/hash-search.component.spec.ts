import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashSearchComponent } from './hash-search.component';

describe('HashSearchComponent', () => {
  let component: HashSearchComponent;
  let fixture: ComponentFixture<HashSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
