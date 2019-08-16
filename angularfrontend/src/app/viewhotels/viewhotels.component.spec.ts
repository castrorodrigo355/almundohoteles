import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhotelsComponent } from './viewhotels.component';

describe('ViewhotelsComponent', () => {
  let component: ViewhotelsComponent;
  let fixture: ComponentFixture<ViewhotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewhotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewhotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
