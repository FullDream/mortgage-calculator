import { motion } from 'framer-motion'

import {
	CreditAndPeriods,
	MoreCard,
	RateAndName,
	Requirements,
} from 'components'

import { CardProps } from './Card.props'
import styles from './Card.module.scss'

export const Card = ({
	organization,
	name,
	rate,
	customerRequirements,
	alias,
}: CardProps) => {
	const periods = rate.periods[0]
	return (
		<motion.li
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			// viewport={{once: true, fallback: false}}
			layout
			className={styles.card}
		>
			<div className={styles.iconWrapper}>
				<img
					src={organization.logo}
					alt={`Логотип компании ${organization.name}`}
					className={styles.icon}
				/>
			</div>
			<RateAndName name={name} rate={periods.rate} />
			<CreditAndPeriods creditAmount={rate.creditAmount} term={periods.term} />
			<Requirements {...customerRequirements} />
			<MoreCard alias={alias} license={organization.license} />
		</motion.li>
	)
}
