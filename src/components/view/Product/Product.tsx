/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { skipToken } from '@reduxjs/toolkit/dist/query'

import { Feature } from 'components'

import { useGetOfferByAliasQuery } from 'store/api/offersApi'
import {
	createTermCredit,
	decOfNum,
	replaceNameBank,
	transformCreditAmount,
	transformCreditTerm,
	transformRateCredit,
} from 'helpers/transfoms'

import styles from './Product.module.scss'
import { Button } from 'components/atoms/Button/Button'
import Skeleton from 'react-loading-skeleton'

export const Product = () => {
	const router = useRouter()

	const alias = router.query.alias
	const thisNameIsString = typeof alias === 'string' ? alias : skipToken

	const result = useGetOfferByAliasQuery(thisNameIsString, {
		skip: router.isFallback,
	})
	const { isLoading, error, data } = result

	const title = data?.organization.name ? data?.organization.name : ''

	return (
		<div>
			<Head>
				<title>
					Ипотека «{data?.name}» от {replaceNameBank(title)}
				</title>
			</Head>
			{isLoading && (
				<Skeleton
					width='100%'
					baseColor='transparent'
					highlightColor='#d4d3d3'
					height='100vh'
				/>
			)}
			{data && (
				<>
					<header className={styles.header}>
						<nav className={styles.breadCrumbs}>
							<Link href='/'>
								<a className={styles.breadCrumbsItem}>Главная</a>
							</Link>
							<span className={styles.breadCrumbsItem}>{data?.name}</span>
						</nav>
						<h1 className={styles.title}>
							Ипотека «{data?.name}» от {replaceNameBank(title)}
						</h1>
					</header>
					<main className={styles.content}>
						<div className={styles.container}>
							<div className={styles.bank}>
								<img
									src={data.organization.logo}
									alt={`Логотип компании ${title}`}
									className={styles.img}
								/>
								<span className={styles.license}>
									лиц. {data.organization.license}
								</span>
							</div>

							<div className={styles.featureWrapper}>
								<Feature name='Процентная ставка' icon='percent'>
									{transformRateCredit(data.rate.periods[0].rate)}
								</Feature>
								<Feature name='Сумма кредита' icon='sum'>
									{transformCreditAmount(data.rate.creditAmount)}
								</Feature>
								<Feature name='Срок' icon='calendar'>
									{createTermCredit(data.rate.periods[0].term)}
								</Feature>
								<Feature name='Первоначальный взнос' icon='sum'>
									от {data.rate.initialAmount.from}%
								</Feature>
								<Feature name='Стаж работы на последнем месте' icon='clock'>
									{data.customerRequirements.lastExperience}{' '}
									{decOfNum(data.customerRequirements.lastExperience, [
										'месяц',
										'месяца',
										'месяцев',
									])}
								</Feature>
								<Feature name='Возраст заёмщика' icon='person'>
									от {data.customerRequirements.age}{' '}
									{decOfNum(data.customerRequirements.age, [
										'года',
										'лет',
										'лет',
									])}
								</Feature>
							</div>
							<Button className={styles.btn}>Перейти на сайт</Button>
						</div>
					</main>
				</>
			)}
		</div>
	)
}
