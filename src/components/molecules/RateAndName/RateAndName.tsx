import { RateAndNameProps } from './RateAndName.props'
import styles from './RateAndName.module.scss'
import { transformRateCredit } from 'helpers/transfoms'
import { CardItem } from 'components'

export const RateAndName = ({ name, rate }: RateAndNameProps) => {


	return (
		<CardItem>
			<span className={styles.rate}>{transformRateCredit(rate)}</span>
			<span className={styles.name}>«{name}»</span>
		</CardItem>
	)
}
