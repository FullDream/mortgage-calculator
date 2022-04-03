import { decOfNum } from 'helpers/transfoms'
import { CardItem } from 'components'

import { RequirementsProps } from './Requirements.props'
import styles from './Requirements.module.scss'

export const Requirements = ({
	age,
	documents,
	lastExperience,
}: RequirementsProps) => {
	return (
		<CardItem className={styles.wrapper}>
			<span className={styles.age}>
				Возраст от {age} {decOfNum(age, ['года', 'лет', 'лет'])}
			</span>
			<span className={styles.lastExperience}>
				Стаж от {lastExperience}{' '}
				{decOfNum(lastExperience, ['месяца', 'месяцев', 'месяцев'])}
			</span>
			<span className={styles.documents}>
				{documents}{' '}
				{decOfNum(documents, ['документ', 'документа', 'документов'])}
			</span>
		</CardItem>
	)
}
