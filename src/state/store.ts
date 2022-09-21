import { configureStore } from "@reduxjs/toolkit";
// import reducers from "./reducers";
// import thunk from 'redux-thunk';
import bankReducer from './reducers'

// const reducer = {
//   bank: bankReducer,
 
// }
// const preloadedState = {
//   todos: [
//     {
//       text: 'Eat food',
//       completed: true,
//     },
//     {
//       text: 'Exercise',
//       completed: false,
//     },
//   ],
//   visibilityFilter: 'SHOW_COMPLETED',
// }

export const store = configureStore({
  reducer: bankReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // preloadedState,
})
