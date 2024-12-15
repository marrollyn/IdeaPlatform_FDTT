import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrencyApi } from '../../components/api/api';
import { CurrencyRates } from '../../types';

type TInitialState = {
    base: string;
    rates: CurrencyRates;
    current: string;
    loading: boolean;
    error: string | null | undefined;
};

const initialState: TInitialState = {
    base: 'EUR',
    rates: {},
    current: 'RUB',
    loading: false,
    error: null,
};

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        toggleCurrency: (state, action) => {
            state.current = action.payload;
        }
    },
    selectors: {
        getRatesSelector: (state) => state.rates,
        getCurrentCurrency: (state) => state.current,
        getBaseCurrency: (state) => state.base,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrency.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCurrency.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchCurrency.fulfilled, (state, action) => {
                state.loading = false;
                state.rates = action.payload.rates;
            });
    },
});

export const fetchCurrency = createAsyncThunk(
    'currency/fetchCurrency',
    async () => getCurrencyApi()
);

export const { toggleCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
export const { getRatesSelector, getCurrentCurrency } = currencySlice.selectors;
