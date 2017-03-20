import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {environment} from '../../environments/environment';

@Injectable()
export class ChampionggService {

  url: string = 'http://api.champion.gg/';
  token: string = environment.championGGKey;

  constructor(private http: Http) {
  }

  getChampion(name: string) {
    return this.http.get(this.url + 'stats/champs/' + name + '?api_key=' + this.token)
  }

  getChampions() {
    return this.http.get(this.url + 'stats/' + name + '?api_key=' + this.token)
  }

}
