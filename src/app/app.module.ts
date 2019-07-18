import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {StatsboxMainpageHeaderComponent} from "./statsbox-mainpage-header/statsbox-mainpage-header.component";
import {StatsboxMainpageBodyComponent} from "./statsbox-mainpage-body/statsbox-mainpage-body.component";
import {StatsboxMainpageFooterComponent} from "./statsbox-mainpage-footer/statsbox-mainpage-footer.component";

@NgModule({
  declarations: [
    AppComponent,
    StatsboxMainpageHeaderComponent,
    StatsboxMainpageBodyComponent,
    StatsboxMainpageFooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
