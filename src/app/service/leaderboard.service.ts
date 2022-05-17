import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  score = []
  topscore = [];

  constructor() { 

  }
  
  start() {
    let json : any;
    console.log(localStorage.getItem("username"));
    for (let i = 0; i < localStorage.length; i++) {
      let username: string;
      if (localStorage.key(i).startsWith("save")) {
        json = JSON.parse(localStorage.getItem(localStorage.key(i)));
        username = localStorage.key(i).replace("save", '');
        this.score.push({username: username, score: json.Score});
      }
    }
    this.score.sort((a, b) => b.score - a.score);
  }

  top10() {
    for (let i = 0; i < 10; i++) {
      this.topscore.push(this.score[i]);
    }
    return this.topscore;
  }

  whereIam() {
    let position: number;
    position = (this.score.findIndex( score => score.username == localStorage.getItem("username")));
    position++
    return position;
  }

}
