import { routerReducer } from "@ngrx/router-store";
import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import { localStorageSync } from 'ngrx-store-localstorage';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
    router: routerReducer
};

export function logger(reducer:ActionReducer<any>): ActionReducer<any> {
    return (state, action) => {
        console.log("state before: ", state);
        console.log("action", action);

        return reducer(state, action);
    }

}

const reducerKeys = ['campaign'];

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: reducerKeys,rehydrate: true})(reducer);
}
const isProduction = false;
export const metaReducers: MetaReducer<State>[] = !isProduction ? [logger, localStorageSyncReducer] : [localStorageSyncReducer];
