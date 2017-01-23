import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ChampionsListComponent} from "./champions-list.component";
import {ApiService} from "../api/championgg-api.service";
import {OrderByPipe} from "../pipe/order-by.pipe";
import {PreLoaderModule} from "../pre-loader/pre-loader.module";
import {ChampionCardComponent} from "../champion-card/champion-card.component";

@NgModule({
    declarations: [
        ChampionsListComponent,
        OrderByPipe,
        ChampionCardComponent
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
    exports : [ChampionsListComponent]
})
export class ChampionsListModule {
}
