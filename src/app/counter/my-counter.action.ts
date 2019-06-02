
import { Action } from '@ngrx/store';

export enum CounterAdapter{
  Add = '[my-counter] Add+',
  Neg = '[my-counter] Neg-',
  Reset = '[my-counter] Reset'
}

export class Incr implements Action {
  readonly type = CounterAdapter.Add
}

export class Decr implements Action {
  readonly type = CounterAdapter.Neg
}

export class Reset implements Action {
  readonly type = CounterAdapter.Reset
}


export type CounterUnion = Incr | Decr | Reset