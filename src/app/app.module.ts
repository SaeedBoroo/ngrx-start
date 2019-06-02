import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyCounterComponent } from './counter/my-counter/my-counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer }  from './counter/my-counter.reducer'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports:      [ 
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      features: {
        pause: true, // start/pause recording of dispatched actions
        lock: true, // lock/unlock dispatching actions and side effects    
        persist: true, // persist states on page reloading
        export: true, // export history of actions in a file
        import: 'custom', // import history of actions from a file
        jump: true, // jump back and forth (time travelling)
        skip: true, // skip (cancel) actions
        reorder: true, // drag and drop actions in the history list 
        dispatch: true, // dispatch custom actions or action creators
        test: true // generate tests for the selected actions
      },
    }),
     ],
  declarations: [ AppComponent, MyCounterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
