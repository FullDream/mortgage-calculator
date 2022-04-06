import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from '@reduxjs/toolkit'

const filtersAdapter = createEntityAdapter()

const initialState = filtersAdapter.getInitialState({
	purpose: ''
})


const filterSlice = createSlice({
	name: 'main',
	initialState,
	reducers: {
		setPurpose: (state, action) => {
			state.purpose = action.payload
		},
	},
})

const { actions, reducer } = filterSlice

export const { setPurpose} = actions
export default reducer