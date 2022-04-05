import React from 'react'
import Link from 'next/link'
import {  makeStore, wrapper } from '../store'
import { getOffersList, getOfferByAlias, getRunningOperationPromises } from 'store/api/offersApi'
import { Product } from 'components'

const Page = () => {
	return (
		<Product/>
	)
}

export const getStaticPaths = async () => {
	const store =  makeStore()
	const res = await store.dispatch(getOffersList.initiate({}))
	

	return {
		paths: res.data?.map(({ alias }) => `/${alias}`),
		fallback: true,
	}
}

export const getStaticProps = wrapper.getStaticProps(
	(store) => async (context) => {
	 	const alias = context.params?.alias
		 if (typeof alias === 'string') {
				store.dispatch(getOfferByAlias.initiate(alias))
			}

		await Promise.all(getRunningOperationPromises())

		return {
			props: {},
		}
	}
)

export default Page
