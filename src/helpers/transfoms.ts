import { CreditAmount, Offset } from '../interfaces/offer'

export const transformRateCredit = ({ from, to }: Offset) => {
	let newString: string
	if (from == to) {
		newString = from.toString()
	} else {
		newString = `от ${from}`
	}

	return newString.replace(/[.]/g, ',').concat('%')
}

export const decOfNum = (
	number: number,
	titles: [string, string, string]
): string => {
	const cases = [2, 0, 1, 1, 1, 2]
	return titles[
		number % 100 > 4 && number % 100 < 20
			? 2
			: cases[number % 10 < 5 ? number % 10 : 5]
	]
}

export const priceRu = (price: number): string =>
	price
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
		.concat(' ₽')

export const transformCreditTerm = (termTo: number) => {
	const years = termTo / 12
	return `На срок до ${years} ${decOfNum(years, ['года', 'лет', 'лет'])}`
}

export const transformCreditAmount = ({ from, to }: CreditAmount) =>
	to ? `${priceRu(from)} - ${priceRu(to)}` : `от ${priceRu(from)}`