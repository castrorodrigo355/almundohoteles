import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { FormfilterComponent } from './formfilter/formfilter.component';
import { ViewhotelsComponent } from './viewhotels/viewhotels.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FormfilterComponent,
    ViewhotelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
