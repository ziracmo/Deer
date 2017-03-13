import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class ApiService {

    constructor(private http: Http) {
    }

    getChampions() {
        let url = 'http://ddragon.leagueoflegends.com/cdn/7.4.3/data/fr_FR/champion.json';
        return this.http.get(url)
    }

    getChampion(name : string) {
      let url = 'http://ddragon.leagueoflegends.com/cdn/7.4.3/data/fr_FR/champion/' + name + '.json';
      return this.http.get(url)
    }

}
