import {Routes} from "@angular/router";
import {ChampionsListComponent} from "./champions-list/champions-list.component";
/**
 * Created by Alexandre on 13/03/2017.
 */


export const appRoutes: Routes = [
  { path: 'champions', component: ChampionsListComponent },
  { path: '',
    redirectTo: '/champions',
    pathMatch: 'full'
  }
];
