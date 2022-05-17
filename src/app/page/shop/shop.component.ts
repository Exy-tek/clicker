import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/service/game.service';
import { ShopService } from 'src/app/service/shop.service';
import { CookieComponent } from '../cookie/cookie.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  cookies = this.gameService.getCookies().getValue();
  constructor(private gameService: GameService, private shopService: ShopService) { }
  farms = this.gameService.getFarms();

  ngOnInit(): void {
    this.gameService.getCookies().subscribe(c => {
      this.cookies = c;
    });
  }

 

  buyFarm(id: number) {
    // if (this.cookies >= cost) {
    //   this.gameService.upgradeIncome(passive);
    //   this.cookies -= cost;
    // }
    this.shopService.buyFarm(id, this.cookies);
  }

}
