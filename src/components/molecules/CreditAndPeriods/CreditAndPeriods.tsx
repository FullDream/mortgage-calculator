import { CardItem } from 'components'
import { transformCreditAmount, transformCreditTerm } from 'helpers/transfoms'

import { CreditAndPeriodsProps } from './CreditAndPeriods.props'
import styles from './CreditAndPeriods.module.scss'


export const CreditAndPeriods = ({ creditAmount, term }: CreditAndPeriodsProps) => {
	return (
		<CardItem>
			<span className={styles.credit}>
				{transformCreditAmount(creditAmount)}
			</span>
			<span className={styles.term}>{transformCreditTerm(term.to)}</span>
		</CardItem>
	)
}

