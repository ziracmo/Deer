import {Component, OnInit} from '@angular/core';
import {ChampionggApiService} from "../api-services/championgg-api.service";
import * as _ from 'lodash';

@Component({
    selector: 'app-champions-list',
    templateUrl: './champions-list.component.html',
    styleUrls: ['./champions-list.component.css']
})

export class ChampionsListComponent implements OnInit {

    champions = [];
    filteredList = []
    searchInput: string;

    constructor(private championggService: ChampionggApiService) {
    }

    ngOnInit() {
        this.championggService.getChampions().subscribe(res => {
            this.champions = res.json()
            this.filteredList = _.cloneDeep(this.champions);
        })
    }

    filterList() {
        if (this.searchInput !== '', this.searchInput !== null) {
            this.filteredList = [];
            for (let champion of this.champions) {
                let name = _.upperCase(champion.key);
                let subString = _.toUpper(this.searchInput);
                if (_.includes(name, subString)) {
                    this.filteredList.push(champion)
                }
            }
        } else {
            this.filteredList = _.cloneDeep(this.champions);
        }
    }

}
