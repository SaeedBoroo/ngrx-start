import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyCounterComponent } from './counter/my-counter/my-counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer }  from './counter/my-counter.reducer'

@NgModule({
  imports:      [ 
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer })
     ],
  declarations: [ AppComponent, MyCounterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
