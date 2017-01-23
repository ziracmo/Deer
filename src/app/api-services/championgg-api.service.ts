import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class ChampionggApiService {

    private key: string  = 'd80b4943f31f5b4b122ba14bf4d06afb';

    constructor(private http: Http) {
    }

    getChampions() {
        let url = 'http://api.champion.gg/champion?api_key=' + this.key;
        return this.http.get(url)
    }

}
