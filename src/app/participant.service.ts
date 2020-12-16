import { Injectable } from '@angular/core';
import { Participant } from './participant';
import { Participants } from './mock-participants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ParticipantService {
  totalBalance = 0;
  totalFood = 0;
  totalDrink = 0;

  constructor(private router: Router) {}

  createParticipant(participant: Participant) {
    const item = { ...participant, id: Participants.length + 1 };
    Participants.push(item);
  }

  getParticipants(): Participant[] {
    return Participants;
  }

  deleteParticipant(id: number) {
    const checkedId = Participants.findIndex(
      (participant) => participant.id === id
    );
    if (checkedId >= 0) {
      Participants.splice(checkedId, 1);
    }
  }

  public getBalance() {
    this.totalBalance = 0;
    this.totalFood = 0;
    this.totalDrink = 0;
    Participants.forEach((p) => {
      const item = p as any;
      if (item.drink) {
        this.totalDrink += 10;
        this.totalFood += 10;
      } else {
        this.totalFood += 10;
      }
      if (item.guest.exists) {
        if (item.guest.drink) {
          this.totalDrink += 10;
          this.totalFood += 10;
        } else {
          this.totalFood += 10;
        }
      }
      this.totalBalance = this.totalDrink + this.totalFood;
    });
    return {
      balance: this.totalBalance,
      drink: this.totalDrink,
      food: this.totalFood,
    };
  }
}
