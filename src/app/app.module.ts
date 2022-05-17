import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './page/home/home.component';
import { CookieComponent } from './page/cookie/cookie.component';
import { ShopComponent } from './page/shop/shop.component';
import { WaitingRoomComponent } from './page/waiting-room/waiting-room.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeaderboardComponent } from './page/leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CookieComponent,
    ShopComponent,
    WaitingRoomComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,                               // <========== Add this line!
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
