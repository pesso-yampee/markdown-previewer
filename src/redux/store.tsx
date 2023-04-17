import { configureStore } from '@reduxjs/toolkit';
import convertorReducer from './convertorSlice';

export const store = configureStore({
	reducer: {
		convert: convertorReducer
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
