import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialProps = {
	isOpen: boolean;
	contentsId: string;
};

const initialState: initialProps = {
	isOpen: false,
	contentsId: ''
};

export const expandSlice = createSlice({
	name: 'expand',
	initialState,
	reducers: {
		expand: (state, action) => {}
	}
});
