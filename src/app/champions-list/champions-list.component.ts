import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api/championgg-api.service";
import * as _ from 'lodash';

@Component({
    selector: 'app-champions-list',
    templateUrl: './champions-list.component.html',
    styleUrls: ['./champions-list.component.css']
})

export class ChampionsListComponent implements OnInit {

    isLoading: boolean = false;
    champions = [];
    filteredList = []
    searchInput: string;

    constructor(private championggService: ApiService) {
    }

    ngOnInit() {
        this.isLoading = true;
        this.championggService.getChampions().subscribe(res => {
            let data = res.json().data
            _.each(data, (champion) => {
                this.champions.push(champion)
            })
            this.filteredList = _.cloneDeep(this.champions);
            this.isLoading = false;
        })
    }

    filterList() {
        if (this.searchInput !== '', this.searchInput !== null) {
            this.filteredList = [];
            for (let champion of this.champions) {
                let name = _.upperCase(champion.name);
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
