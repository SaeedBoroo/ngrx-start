import { Action } from '@ngrx/store';
import { CounterAdapter }  from './my-counter.action'

const initialState = 0

export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case CounterAdapter.Add :
      return state + 1;
 
    case CounterAdapter.Neg :
      return state - 1;
 
    case CounterAdapter.Reset :
      return 0;
 
    default:
      return state;
  }
}