import { DetailedHTMLProps, HTMLAttributes } from 'react'

import calendar from 'svg/calendar.svg'
import clock from 'svg/clock.svg'
import percent from 'svg/percent.svg'
import person from 'svg/person.svg'
import sum from 'svg/sum.svg'

export const icons = {
	clock,
	calendar,
	percent,
	person,
	sum,
}
export type IconName = keyof typeof icons

export interface FeatureProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	icon: IconName
	name: string
}


