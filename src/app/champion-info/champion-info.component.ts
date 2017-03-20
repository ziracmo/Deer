import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private route: Router
    ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.name = params['name'];
      this.setChampion();
    })
  }

  setChampion() {
    this.apiService.getChampion(this.name).subscribe(
      (res) => {
        this.championData = res.json().data[this.name];
        // console.log(this.championData)
        this.isloading = false;
      },
      (err) => {
        console.log('Champion request failed : ', err);
        this.route.navigate(['/'])
      })
  }
}
