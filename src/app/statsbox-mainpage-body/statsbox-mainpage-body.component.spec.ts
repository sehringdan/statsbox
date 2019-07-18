import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {StatsboxMainpageBodyComponent} from "./statsbox-mainpage-body.component";

describe("StatsboxMainpageBodyComponent", () => {
  let component: StatsboxMainpageBodyComponent;
  let fixture: ComponentFixture<StatsboxMainpageBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatsboxMainpageBodyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsboxMainpageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
