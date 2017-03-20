import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterializeDirective} from "angular2-materialize";

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ChampionsListModule} from "./champions-list/champions-list.module";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {ChampionInfoModule} from "./champion-info/champions-info.module";
import {StatsComponent} from "./stats/stats.component";

@NgModule({
  declarations: [
    AppComponent,
    MaterializeDirective,
    HeaderComponent,
    StatsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    ChampionsListModule,
    ChampionInfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
