import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LogoComponent } from './logo/logo.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import {MatIconModule} from "@angular/material/icon";



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavigationComponent,
        LogoComponent,
    ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatIconModule,
  ],
    providers: [],
    exports: [
        NavigationComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

