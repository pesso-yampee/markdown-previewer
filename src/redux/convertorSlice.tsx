import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateProps = {
	inputText: string;
};

const initialState: initialStateProps = {
	inputText: ''
};

export const convertorSlice = createSlice({
	name: 'convertor',
	initialState,
	reducers: {
		convertMarkdown: (state, action: PayloadAction<string>) => {
			state.inputText = action.payload;
		}
	}
});

export const { convertMarkdown } = convertorSlice.actions;
export default convertorSlice.reducer;
