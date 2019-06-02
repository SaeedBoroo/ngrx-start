import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs'
import { Incr , Decr , Reset } from '../my-counter.action';

@Component({
  selector: 'my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<{count: number}>) 
  { 
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit() {
  }

  increment(){
    this.store.dispatch(new Incr())
  }

  decrement(){
    this.store.dispatch(new Decr())
  }

  reset(){
    this.store.dispatch(new Reset())
  }
}

