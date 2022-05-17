import { Injectable } from '@angular/core';
import { GameService } from './game.service';

@Injectable({
  providedIn: 'root'
})
export class ShopService {


  private farms = this.gameService.getFarms();
  cookies = this.gameService.getCookies().getValue();

  constructor(private gameService: GameService) {

   }

  buyFarm(id: number, cookies: number) {
    let farm = "farm" + id;
    if (farm in this.farms) {
      if (cookies >= this.farms[farm].cost) {
        this.cookies -= this.farms[farm].cost;
        this.gameService.upgradeIncome(this.farms[farm].income);
        this.gameService.setCookies(this.gameService.getCookies().getValue() - this.farms[farm].cost);
        this.farms[farm].cost *= 2;
        this.farms[farm].level++;
        localStorage.setItem(this.gameService.getUserSave(), JSON.stringify(this.farms))
      }
    }
  }
  

  getFarms() {
    return this.farms;
  }

}
