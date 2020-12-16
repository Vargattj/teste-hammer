import {Component, OnInit} from '@angular/core';
import {ParticipantService} from '../participant.service';
import {Participant} from '../participant';

@Component({
    selector: 'app-participants',
    templateUrl: './participants.component.html',
    styleUrls: ['./participants.component.scss'],
})
export class ParticipantsComponent implements OnInit {
    participants: Participant[] | undefined;
    public balance = 0;
    public totalFood = 0;
    public totalDrink = 0;

    constructor(private p: ParticipantService) {
    }

    getParticipants() {
        this.participants = this.p.getParticipants();
        console.log(this.participants);
    }

    deleteParticipant(id: number) {
        this.p.deleteParticipant(id);
        this.updateValues();
    }

    ngOnInit(): void {
        this.getParticipants();
        this.updateValues();
    }

    private updateValues(): void {
        this.balance = this.p.getBalance().balance;
        this.totalFood = this.p.getBalance().food;
        this.totalDrink = this.p.getBalance().drink;
    }
}
