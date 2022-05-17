import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { CookieComponent } from './page/cookie/cookie.component';
import { ShopComponent } from './page/shop/shop.component';
import { WaitingRoomComponent } from './page/waiting-room/waiting-room.component';
import { LeaderboardComponent } from './page/leaderboard/leaderboard.component';


const routes: Routes = [
  
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'cookie',
      component: CookieComponent,
    },
    {
      path: 'shop',
      component: ShopComponent,
    },
    {
      path: 'waiting-room',
      component: WaitingRoomComponent,
    },
    {
      path: 'leaderboard',
      component: LeaderboardComponent,
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'waiting-room',
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
