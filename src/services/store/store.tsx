import { configureStore } from '@reduxjs/toolkit';
import { ticketsReducer } from '../slices/ticketsSlice'
import { currencyReducer } from '../slices/currencySlice';

const store = configureStore({
    reducer: {
        tickets: ticketsReducer,
        currency: currencyReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
