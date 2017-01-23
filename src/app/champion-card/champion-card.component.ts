import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';

@Component({
    selector: 'app-champion-card',
    templateUrl: './champion-card.component.html',
    styleUrls: ['./champion-card.component.css']
})
export class ChampionCardComponent {

    @Input() champion;

    constructor() {


    }

    ngAfterViewInit() {
        let imgUrl = '../../assets/img/champions/' + this.champion.image.sprite
        let img = document.getElementById('img' + this.champion.name);
        let backgroundStyle = 'url(' + imgUrl + ') -' + this.champion.image.x + 'px -' + this.champion.image.y + 'px no-repeat';
        console.log(backgroundStyle)
        img.style.background = backgroundStyle;
    }

}
