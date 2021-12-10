import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiopicComponent } from './biopic/biopic.component';
import { CustomerComponent } from './customer/customer.component';
import { FormComponent } from './form/form.component';
import { googleCopyComponent } from './googlecopy/googlecopy.component';
import { IconComponent } from './icon/icon.component';
import { KunduComponent } from './kundu/kundu.component';
import { LoginComponent } from './login/login.component';
import { movieComponent } from './movie/movie.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent,
    KunduComponent,
    CustomerComponent,
    IconComponent,
    UserComponent,
    googleCopyComponent,
    BiopicComponent,
    movieComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
