import { Component } from '@angular/core';
import { GameService } from './service/game.service';
import { LeaderboardService } from './service/leaderboard.service';
import { TimerService } from './service/timer.service';
import { WaitingRoomService } from './service/waiting-room.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cookie-clicker';
  constructor(private leaderboard: LeaderboardService, private timerService: TimerService, private gameService: GameService, private roomWaiting: WaitingRoomService) {}

  ngOnInit(): void {
    this.timerService.getTimer(1000).subscribe(event => {
      this.gameService.setCookies(this.gameService.getCookies().getValue() + this.gameService.getIncome());
      this.gameService.setScore(this.gameService.getScore().getValue() + this.gameService.getIncome())
      this.gameService.update();
    });
  }

  started() {
    return this.roomWaiting.getAccepted();
  }
}
