import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'state',
    storage,
}

const persistedReducer = persistReducer( persistConfig, rootReducer )

export const store = createStore( persistedReducer, applyMiddleware( thunk ) )

export const persistor = persistStore( store )