import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { GameService } from 'src/app/service/game.service';
import { HomeService } from 'src/app/service/home.service';
import { ShopService } from 'src/app/service/shop.service';
import { TimerService } from 'src/app/service/timer.service';
import { Router, RouterModule } from '@angular/router';
import { WaitingRoomService } from 'src/app/service/waiting-room.service';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss']
})
export class CookieComponent implements OnInit {

  cookie = 0;

  constructor(private router: Router, private homeService: HomeService, private gameService: GameService, private timerService: TimerService, private shopService: ShopService, private waitRoom: WaitingRoomService) { }

  ngOnInit(): void {
    this.gameService.getCookies().subscribe(c => {
      this.cookie = c;
    });
  }

  clear() {
    localStorage.removeItem(this.gameService.getUserSave());
  }

  addCookie() {
    this.gameService.addCookies();
  }

  buyFarms() {
    this.gameService.buyFarms();
  }

  disconnect() {
    this.gameService.setUsername(null);
    localStorage.removeItem("username");
    this.waitRoom.setAccepted(false);
    this.router.navigate(['waiting-room']);

  }
 
}
