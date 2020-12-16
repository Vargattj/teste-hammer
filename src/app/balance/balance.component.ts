import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ParticipantService} from '../participant.service';

@Component({
    selector: 'app-balance',
    templateUrl: './balance.component.html',
    styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent {

    @Input() totalBalance = 0;
    @Input() totalDrink = 0;
    @Input() totalFood = 0;

    constructor() {
    }


}
