import cn from 'classnames'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

import styles from './Sort.module.scss'

const sortItems = [
	{ value: 'rate', label: 'по ставке' },
	{ value: 'creditAmount', label: 'по сумме' },
]

export const Sort = () => {
	const { push, query } = useRouter()

	const onSortOffersList = (querySort: string) => () => {
		push({ pathname: '/', query: { sort: encodeURI(querySort) } }, undefined, {
			scroll: false,
		})
	}

	return (
		<fieldset className={styles.fieldset}>
			<legend className={styles.legend}>Сортировать:</legend>
			{sortItems.map(({ value, label }, i) => (
				<label key={i} className={styles.label}>
					<input
						onClick={onSortOffersList(value)}
						type='radio'
						name='sort'
						className={styles.input}
					/>
					<span
						className={cn(styles.name, {
							[styles.active]: query.sort == value,
						})}
					>
						{label}
					</span>
					{query.sort == value && (
						<motion.div layoutId='underline' className={styles.underline} />
					)}
				</label>
			))}
		</fieldset>
	)
}
