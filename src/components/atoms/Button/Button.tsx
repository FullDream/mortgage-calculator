import { ButtonProps } from './Button.props'
import styles from './Button.module.scss'

import { motion } from 'framer-motion'
import cn from 'classnames'
import { ForwardedRef, forwardRef } from 'react'

export const Button = forwardRef(({
	as: Tag = 'button',
	children,
	className,
	...props
}: ButtonProps, ref :ForwardedRef<HTMLAnchorElement | HTMLButtonElement>) => {
	return (
		<Tag ref={ref} className={cn(styles.dinamicTag, className)} {...props}>
			<motion.div
				whileHover={{ boxShadow: '#0bbc41 0px 15px 10px -10px' }}
				whileTap={{ scale: 0.9 }}
				className={cn(styles.button)}
			>
				{children}
			</motion.div>
		</Tag>
	)
})

Button.displayName = 'Button'
