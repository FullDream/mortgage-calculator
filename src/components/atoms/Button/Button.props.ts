import { ButtonHTMLAttributes, DetailedHTMLProps, ElementType, ReactNode } from 'react'


export interface ButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	as?: ElementType
	children: ReactNode
}
