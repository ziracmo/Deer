import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {PreLoaderModule} from "../pre-loader/pre-loader.module";
import {ChampionInfoComponent} from "./champion-info.component";
import {ChampionggService} from "../api/championgg.service";

@NgModule({
  declarations: [
    ChampionInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PreLoaderModule
  ],
  providers: [
    ChampionggService
  ],
  exports: [ChampionInfoComponent]
})
export class ChampionInfoModule {
}
