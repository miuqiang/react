import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

// import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);

// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   stateReconciler: autoMergeLevel2 // 查看 'Merge Process' 部分的具体情况
// };

// const myPersistReducer = persistReducer(persistConfig, reducer)

const store = createStore(
  reducer,
  enhancer
  // myPersistReducer
);

// export const persistor = persistStore(store)

export default store;