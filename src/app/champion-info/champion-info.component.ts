import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ChampionggService} from "../api/championgg.service";


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
    private cggService: ChampionggService,
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
    this.cggService.getChampion(this.name).subscribe(
      (res) => {
        console.log(res.json())
        this.championData = res.json().data;
        console.log(this.championData)
        this.isloading = false;
      },
      (err) => {
        console.log('Champion request failed : ', err);
        this.route.navigate(['/'])
      })
  }
}
