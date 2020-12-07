import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fa500px, faGithub } from '@fortawesome/free-brands-svg-icons';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './auth/register/register.component';
import { HeaderComponent } from './shared/header/header.component';
import { RentalSecretComponent } from './rental/rental-secret/rental-secret.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    RentalSecretComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private faIcon: FaIconLibrary) {
    this.faIcon.addIcons(fa500px, faGithub)
  }
}
