import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

    private farms = {
        farm1: {
          level: 1,
          cost: 10,
          income: 1,
        },
        farm2: {
          level: 1,
          cost: 50,
          income: 2,
        },
        farm3: {
          level: 1,
          cost: 200,
          income: 5,
        },
        farm4: {
          level: 1,
          cost: 500,
          income: 10,
        },
        farm5: {
          level: 1,
          cost: 1000,
          income: 50,
        }
    };
    private click_value = 1;
    private cookies = new BehaviorSubject(0);
    private score =  new BehaviorSubject(0);
    private income = 0;
    private username: string;
    private nb_clicks = 0;
    constructor() { 
 
    }
    
    start() {
        this.username = localStorage.getItem("username");
        let json = JSON.parse(localStorage.getItem("save" + this.username));
        if (json) {
            this.income = json.Income;
            this.click_value = json.Click_value;
            this.farms = json.Farms;
            this.score.next(json.Score);
            this.cookies.next(json.Cookies);
            this.nb_clicks = json.Nb_Clicks;
            this.farms = json.Farms;
        }
        else {
            this.farms = {
                farm1: {
                  level: 1,
                  cost: 10,
                  income: 1,
                },
                farm2: {
                  level: 1,
                  cost: 50,
                  income: 2,
                },
                farm3: {
                  level: 1,
                  cost: 200,
                  income: 5,
                },
                farm4: {
                  level: 1,
                  cost: 500,
                  income: 10,
                },
                farm5: {
                  level: 1,
                  cost: 1000,
                  income: 50,
                }
            };
            this.click_value = 1;
            this.cookies = new BehaviorSubject(0);
            this.score =  new BehaviorSubject(0);
            this.income = 0;
            this.nb_clicks = 0;
        }
    }

    update() {
        if (this.username != null && this.username != '') {
            let save = {
                Score: this.score.getValue(),
                Farms: this.farms,
                Click_value: this.click_value,
                Cookies: this.cookies.getValue(),
                Income: this.income,
                Nb_Clicks: this.nb_clicks,
            };
            localStorage.setItem("save" + this.username, JSON.stringify(save));
        }
    }

    getUserSave() {
        return "save" + this.username;
    }

    getUsername() {
        return this.username;
    }

    getCookies() {
        return this.cookies;
    }

    getClickValue() {
        return this.click_value;
    }

    getScore() {
        return this.score;
    }

    setUsername(username: string) {
        this.username = username;
    }

    setScore(score: number) {
        this.score.next(score);
    }

    addCookies()
    {
        this.cookies.next(this.cookies.getValue() + this.click_value);
        this.nb_clicks++;
        this.score.next(this.score.getValue() + this.click_value);
    }

    getNbClicks() {
        return this.nb_clicks;
    }

    setCookies(cookie: number) {
        this.cookies.next(cookie);
    }

    setFarms(income: number) {
    }

    
    getFarms() {
        return this.farms;
    }

    buyFarms() {
        if (this.getCookies().getValue() >= 10) {
            this.setCookies(this.getCookies().getValue() - 10);
            this.upgradeIncome(1);
            this.click_value *= 2;
        }
    }
    
    addIncome(current_income: number) {
        return this.getCookies().getValue() + this.income;//ajouter l'income
    }
    
    
    getIncome() {
        return this.income;
    }
    
    upgradeIncome(upgrade: number) {
        this.income += upgrade;
    }
}
