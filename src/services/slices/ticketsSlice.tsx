import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTicketsApi } from '../../components/api/api';
import { Ticket } from '../../types';

type TInitialState = {
    tickets: Ticket[];
    stops: (number | null)[];
    loading: boolean;
    error: string | null | undefined;
};

const initialState: TInitialState = {
    tickets: [],
    stops: [null],
    loading: false,
    error: null,
};

const ticketsListSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        selectOnlyStop: (state, action) => {
            const stop = action.payload;
            state.stops = [stop];
        },
        toggleStop: (state, action) => {
            const stop = action.payload;
            if (stop === null) {
                // если выбрана опция 'Все', сбрасываем остальные значения
                state.stops = [null];
            } else {
                // если выбрана другая опция, удаляем 'Все' и добавляем выбранное значение
                if (state.stops.includes(null)) {
                    state.stops = state.stops.filter(item => item !== null);
                }
                if (state.stops.includes(stop)) {
                    // если уже есть, удаляем
                    state.stops = state.stops.filter(item => item !== stop);
                } else {
                    // добавляем
                    state.stops.push(stop);
                }
            }
        },
    },
    selectors: {
        getTicketsSelector: (state) => state.tickets,
        getStopsSelector: (state) => state.stops,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTickets.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTickets.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchTickets.fulfilled, (state, action) => {
                state.loading = false;
                state.tickets = action.payload.tickets;
            });
    },
});

export const fetchTickets = createAsyncThunk(
    'tickets/fetchTickets',
    async () => getTicketsApi()
);

export const ticketsReducer = ticketsListSlice.reducer;
export const { getTicketsSelector, getStopsSelector } = ticketsListSlice.selectors;
export const { toggleStop, selectOnlyStop } = ticketsListSlice.actions; 