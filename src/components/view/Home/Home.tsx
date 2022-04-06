import { useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

import { Button, Card, Sort } from 'components'
import { useGetOffersListQuery } from 'store/api/offersApi'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import styles from './Home.module.scss'

export const HomePage = () => {
	const { query: {sort} } = useRouter()
	const [offset, setOffset] = useState(10)
	const result = useGetOffersListQuery({ offset, sort: sort })
	const { data, isLoading, isFetching } = result


	const onOffersLoaded = () => setOffset(offset + 10)

	const disabledButton = () => data && offset > data?.length

	return (
		<>
			<Head>
				<title>Ипотечный калькулятор</title>
			</Head>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<header className={styles.header}>
						<h1 className={styles.title}>Ипотечный калькулятор</h1>
					</header>
				</div>
			</div>

			<div className={styles.content}>
				<Sort />
				{isLoading && (
					<Skeleton height={100} highlightColor='#d4d3d3' count={10} />
				)}
				{data && (
					<motion.ul layout layoutId='list' className={styles.listCard}>
						{data.map((item) => (
							<Card key={item.alias} {...item} />
						))}
					</motion.ul>
				)}
				<Button
					className={styles.loadBtn}
					disabled={disabledButton()}
					onClick={onOffersLoaded}
				>
					Загрузить еще
				</Button>
			</div>
		</>
	)
}
