import { Offset } from 'interfaces/offer'
import { DetailedHTMLProps, HTMLAttributes } from 'react'


export interface RateAndNameProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	name: string
	rate: Offset
}