import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { offersApi } from './api/offersApi'
import filters from './slices/filterSlice'

export const makeStore = () =>
	configureStore({
		reducer: {
			[offersApi.reducerPath]: offersApi.reducer,
			filters,
		},
		middleware: (gDM) => gDM().concat(offersApi.middleware),
	})

export type RootStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<RootStore['getState']>
export type RootDispatch = RootStore['dispatch']

export const wrapper = createWrapper<RootStore>(makeStore, { debug: false })
