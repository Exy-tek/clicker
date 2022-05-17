import { Injectable } from '@angular/core';
import { GameService } from './game.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private gameService: GameService) { }

  getClicks() {
    return this.gameService.getNbClicks();
  }

  getScore() {
    return this.gameService.getScore();
  }

  getFarms() {
    return this.gameService.getFarms();
  }
}
