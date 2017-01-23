import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterializeDirective} from "angular2-materialize";

import {AppComponent} from './app.component';
import {ChampionggApiService} from "./api-services/championgg-api.service";
import { ChampionsListComponent } from './champions-list/champions-list.component';
import { OrderByPipe } from './pipe/order-by.pipe';

@NgModule({
    declarations: [
        AppComponent,
        MaterializeDirective,
        ChampionsListComponent,
        OrderByPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        ChampionggApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
