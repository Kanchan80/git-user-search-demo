import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ProfileService } from './services/profile.service';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { SortPipe } from './pipes/sort.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileDetailsComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
