import {reducer} from "../redusers/reducer";
import {combineReducers, legacy_createStore} from "redux";
import {loadState, saveState} from "../components/LocalStorage";


export const rootReducers = combineReducers({
    counter: reducer
})

export const store = legacy_createStore(rootReducers, loadState())

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})

export type AppStoreType = ReturnType<typeof rootReducers>

//@ts-ignore
window.store = store




