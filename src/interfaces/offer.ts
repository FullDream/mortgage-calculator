export interface Offer {
	name: string
	alias: string
	organization: Organization
	customerRequirements: CustomerRequirements
	rate: Rate
}

export interface CustomerRequirements {
	documents: number
	age: number
	manAgeAtRepayment: number
	femaleAgeAtRepayment: number
	lastExperience: number
	fullExperience: number
	salary: number
}

export interface Organization {
	name: string
	license: string
	logo: string
}

export interface Rate {
	periods: Period[]
	currency: Currency
	creditAmount: CreditAmount
	initialAmount: CreditAmount
}

export interface CreditAmount {
	from: number
	to?: number
}

export enum Currency {
	Rub = 'RUB',
}

export interface Offset {
    from: number
    to: number
}

export interface Period {
	rate: Offset
	termUnit: TermUnit
	term: Offset
	isFloatingRate: boolean
}

export enum TermUnit {
	Month = 'month',
}
