import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SortByRatingPipe } from './shared/sort.pipe';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    SortByRatingPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
