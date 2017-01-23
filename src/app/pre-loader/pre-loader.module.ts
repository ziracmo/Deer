import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {PreLoaderComponent} from "./pre-loader.component";

@NgModule({
    declarations: [
        PreLoaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
    ],
    exports : [PreLoaderComponent]
})
export class PreLoaderModule {
}
