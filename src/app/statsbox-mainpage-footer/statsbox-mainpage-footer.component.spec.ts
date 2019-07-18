import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {StatsboxMainpageFooterComponent} from "./statsbox-mainpage-footer.component";

describe("StatsboxMainpageFooterComponent", () => {
  let component: StatsboxMainpageFooterComponent;
  let fixture: ComponentFixture<StatsboxMainpageFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatsboxMainpageFooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsboxMainpageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
