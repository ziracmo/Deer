import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class ApiService {

    constructor(private http: Http) {
    }

    getChampions() {
        let url = 'http://ddragon.leagueoflegends.com/cdn/4.21.5/data/fr_FR/champion.json';
        return this.http.get(url)
    }

}
