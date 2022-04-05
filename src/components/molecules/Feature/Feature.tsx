import cn from 'classnames'

import { FeatureProps, icons } from './Feature.props'
import styles from './Feature.module.scss'

export const Feature = ({
	name,
	icon,
	children,
	className,
	...props
}: FeatureProps) => {
	const IconComponent = icons[icon]
	return (
		<div className={cn(styles.wrapper, className)} {...props}>
			<div className={styles.name}>
				<IconComponent className={styles.icon} />
				{name}
			</div>
			<div className={styles.content}>{children}</div>
		</div>
	)
}
