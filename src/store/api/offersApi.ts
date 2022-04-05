import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Offer } from 'interfaces/offer'
import { HYDRATE } from 'next-redux-wrapper'

export const offersApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3000/api/',
	}),
	extractRehydrationInfo(action, { reducerPath }) {
		if (action.type === HYDRATE) {
			return action.payload[reducerPath]
		}
	},
	tagTypes: [],
	endpoints: (builder) => ({
		getOffersList: builder.query<
			Offer[],
			{ offset?: number; sort?: string | string[] } | undefined
		>({
			query: (arg) => {
				return {
					url: `offers`,
					params: { ...arg },
				}
			},
		}),
		getOfferByAlias: builder.query<Offer, string>({
			query: (alias) => `offers/${alias}`,
		}),
	}),
})

export const {
	useGetOffersListQuery,
	useGetOfferByAliasQuery,
	util: { getRunningOperationPromises },
} = offersApi

export const { getOffersList, getOfferByAlias } = offersApi.endpoints
