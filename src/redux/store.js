import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
    //persistStore,

    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';


import reducer from './contacts/contacts-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];




export const store = configureStore({
    reducer: {
        contacts:  reducer,
    },
    middleware,
})

//export const persistor = persistStore(store);
