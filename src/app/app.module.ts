import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ParticipantsComponent } from './participants/participants.component';
import { ParticipantFormComponent } from './participant-form/participant-form.component';
import { BalanceComponent } from './balance/balance.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    ParticipantsComponent,
    ParticipantFormComponent,
    BalanceComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

//importar todos os componentes para a declarations do NgModule
