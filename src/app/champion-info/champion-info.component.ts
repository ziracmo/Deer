import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../api/ddragon-api.service";

@Component({
  selector: 'app-champion-info',
  templateUrl: './champion-info.component.html',
  styleUrls: ['./champion-info.component.css']
})
export class ChampionInfoComponent implements OnInit {

  name: string;
  championData;
  isloading: boolean = true;

  constructor(private route: ActivatedRoute, private apiService:ApiService ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['name'];

      this.apiService.getChampion(this.name).subscribe(res => {
        this.championData = res.json().data;
        console.log(this.championData)
        this.isloading = false;
      })
    })
  }




}
