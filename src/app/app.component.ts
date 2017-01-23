import { Component } from '@angular/core';
import {ChampionggApiService} from "./api-services/championgg-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  champions = [];

  constructor(private service: ChampionggApiService) {

  }
}
