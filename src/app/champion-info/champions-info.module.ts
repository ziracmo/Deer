import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ApiService} from "../api/ddragon-api.service";
import {PreLoaderModule} from "../pre-loader/pre-loader.module";
import {ChampionInfoComponent} from "./champion-info.component";

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
        ApiService
    ],
    exports : [ChampionInfoComponent]
})
export class ChampionInfoModule {
}
