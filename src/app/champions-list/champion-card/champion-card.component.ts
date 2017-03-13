import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-champion-card',
    templateUrl: 'champion-card.component.html',
    styleUrls: ['champion-card.component.css']
})
export class ChampionCardComponent {

    @Input() champion;

    constructor(private router:Router) {
    }

    ngAfterViewInit() {
        let imgUrl = '../../assets/img/champions/' + this.champion.image.sprite;
        let img = document.getElementById('img' + this.champion.name);
        let backgroundStyle = 'url(' + imgUrl + ') -' + this.champion.image.x + 'px -' + this.champion.image.y + 'px no-repeat';
        img.style.background = backgroundStyle;
    }

    goToChampionInformations() {
      this.router.navigate(['/champion', this.champion.name]);
    }

}
