import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/service/game.service';
import { WaitingRoomService } from 'src/app/service/waiting-room.service';
import { Router, RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LeaderboardService } from 'src/app/service/leaderboard.service';

@Component({
  selector: 'app-waiting-room',
  templateUrl: './waiting-room.component.html',
  styleUrls: ['./waiting-room.component.scss']
})
export class WaitingRoomComponent implements OnInit {

  private playCookieClick = false;
  username: string = '';

  constructor(private leaderboard: LeaderboardService, private router:Router, private waitingRoom: WaitingRoomService, private gameService: GameService) { }

  ngOnInit(): void {
  }

  acceptCookies() {
    this.playCookieClick = true;
  }

  accepted() {
    return this.playCookieClick;
  }

  setUsername() {
    if (this.username.length >= 3) {
      this.waitingRoom.setAccepted(this.playCookieClick);
      localStorage.setItem("username", this.username);
      this.gameService.start();
      this.leaderboard.start();
      this.router.navigate(['/home']);
    }
    else {
      alert("Le pseudo doit faire minimum 3 caractères");
    }
  }

  declined() {
    alert('mais ils sont bons mes cookies !');
  }
}
