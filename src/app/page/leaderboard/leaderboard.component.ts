import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from 'src/app/service/leaderboard.service';
import { Router } from '@angular/router';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  scoreboard = [];
  whereIam : number;
  exists = false;
  constructor(private router: Router, private leaderBoard: LeaderboardService, private gameService: GameService) {

   }


  ngOnInit(): void {
    this.scoreboard = this.leaderBoard.top10();
    this.whereIam = this.leaderBoard.whereIam();
    
  }

}
