import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantsComponent } from './participants/participants.component';
import { ParticipantFormComponent } from './participant-form/participant-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/participar', pathMatch: 'full' },
  { path: 'participantes', component: ParticipantsComponent },
  { path: 'participar', component: ParticipantFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
