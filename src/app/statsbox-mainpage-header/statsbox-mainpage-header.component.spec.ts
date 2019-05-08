import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StatsboxMainpageHeaderComponent} from './statsbox-mainpage-header.component';

describe('StatsboxMainpageHeaderComponent', () => {
  let component: StatsboxMainpageHeaderComponent;
  let fixture: ComponentFixture<StatsboxMainpageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatsboxMainpageHeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsboxMainpageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
