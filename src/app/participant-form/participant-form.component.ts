import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Participant } from '../participant';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-participant-form',
  templateUrl: './participant-form.component.html',
  styleUrls: ['./participant-form.component.scss'],
})
export class ParticipantFormComponent implements OnInit {
  newParticipant: Participant = {
    id: 1,
    guest: {
      exists: false,
      name: '',
      drink: false,
    },
    name: '',
    drink: false,
  };

  constructor(
    private participant: ParticipantService,
    private router: Router
  ) {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      alert('Cadastre o nome do participante');
      return false;
    }
    // if(!)
    this.participant.createParticipant(this.newParticipant);
    return this.router.navigateByUrl('/participantes');
  }

  ngOnInit(): void {}
}
