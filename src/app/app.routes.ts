import {Routes} from "@angular/router";
import {ChampionsListComponent} from "./champions-list/champions-list.component";
import {ChampionInfoComponent} from "./champion-info/champion-info.component";
import {StatsComponent} from "./stats/stats.component";
/**
 * Created by Alexandre on 13/03/2017.
 */


export const appRoutes: Routes = [
  { path: 'champions', component: ChampionsListComponent },
  { path: 'champion/:name', component: ChampionInfoComponent },
  { path: 'Stats', component: StatsComponent },
  { path: '',
    redirectTo: '/champions',
    pathMatch: 'full'
  }
];
