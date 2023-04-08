// import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit';
// import { HYDRATE } from 'next-redux-wrapper';

import { combineReducers } from 'redux';
import { createStore, AnyAction, Store } from 'redux';
import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper';

import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import modal, { modalState } from './modal';
import user, { userState } from './user';

// import userReducer, { UserState } from 'store/slices/usersSlice';
// import feedReducer, { FeedState } from 'store/slices/feedsSlice';

// export interface IState {
//   users: UserState;
//   feeds: FeedState;
//   filter: FilterState;
//   restaurants: RestaurantState;
//   rooms: RoomState;
// }

// const rootReducer = (
//   state: IState,
//   action: AnyAction,
// ): CombinedState<IState> => {
//   switch (action.type) {
//     case HYDRATE:
//       return action.payload;
//     default: {

//       return combinedReducer(state, action);
//     }
//   }
// };

// export default rootReducer;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userData'],
};

export type indexState = {
  userData: userState;
  modalData: modalState;
};

const combinedReducer = combineReducers({
  userData: user,
  modalData: modal,
});

export const persistedReducer = persistReducer(persistConfig, combinedReducer);

// create a makeStore function
// const makeStore = (context: Context) => createStore(combinedReducer);
const makeStore = () => {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    return createStore(combinedReducer);
  } else {
    // we need it only on client side
    const store = createStore(persistedReducer);
    let persistor = persistStore(store);
    return { persistor, ...store };
  }
};

export const persistor = persistStore(createStore(persistedReducer));

// export an assembled wrapper
export const wrapper = createWrapper<Store<indexState>>(makeStore, {
  // debug: true,
});
