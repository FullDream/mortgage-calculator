import Link from 'next/link'

import { CardItem, Button } from 'components'

import { MoreCardProps } from './MoreCard.props'
import styles from './MoreCard.module.scss'

export const MoreCard = ({ alias, license }: MoreCardProps) => {
	return (
		<CardItem className={styles.wrapper}>
			<span className={styles.license}>лиц. № {license}</span>

            <Link href={'/' + alias} passHref>
                <Button as='a' >Подробнее</Button>
            </Link>
		</CardItem>
	)
}

