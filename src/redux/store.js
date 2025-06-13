import {combineReducers, configureStore} from '@reduxjs/toolkit'
import authReducer from "./authSlice ";
import courseReducer from "./courseSlice";
import subjectReducer from "./subjectSlice";
import postReducer from './postAPI'
import patchReducer from './patchAPI'
import getReducer from './getAPI'

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'


  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

  const rootReducer = combineReducers({
    auth:authReducer,
    course:courseReducer,
    subject:subjectReducer,
    post:postReducer,
    patch:patchReducer,
    get:getReducer
    // post:postSlice
  })
  
export  const persistedReducer = persistReducer(persistConfig, rootReducer)

const store =configureStore({
    reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
// export const persistor = persistStore(store);
export default store