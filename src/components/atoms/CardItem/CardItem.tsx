import cn from 'classnames'

import { CardItemProps } from './CardItem.props'
import styles from './CardItem.module.scss'


export const CardItem = ({ children, className, ...props }: CardItemProps) => {
	return (
		<div className={cn(styles.wrapper, className)} {...props}>
			{children}
		</div>
	)
}

