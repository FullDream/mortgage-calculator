import React from 'react'
import { useSelector, useStore } from 'react-redux'
import Link from 'next/link'
import { getAlias, wrapper } from '../store'

const Page = (props) => {
	return (
		<div>
			<Link href='/'>
				<a> home page</a>
			</Link>
		</div>
	)
}

export const getServerSideProps = wrapper.getServerSideProps(
	(store) =>
		async ({ params }) => {
			const { alias } = params

			console.log(params)

			await store.dispatch(getAlias(alias))

			return {
				props: {
					alias,
				},
			}
		}
)

export default Page
