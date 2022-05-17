import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WaitingRoomService {

  private accepted = false;
  constructor() { }

  setUsername(username : string) {
    localStorage.setItem("username", username);
  }

  getAccepted() {
    return this.accepted;
  }

  setAccepted(value: boolean) {
    this.accepted = value;
  }
}
