import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nb_clicks = this.homeService.getClicks();
  score = this.homeService.getScore().getValue();
  nb_farms = this.homeService.getFarms();
  username = localStorage.getItem("username");
  constructor(private homeService: HomeService) { 
  }
  
  ngOnInit(): void {
    this.homeService.getScore().subscribe(c => {
      this.score = c;
    });
  }
  


}
