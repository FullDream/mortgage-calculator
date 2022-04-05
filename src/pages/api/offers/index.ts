import { NextApiRequest, NextApiResponse } from 'next'

import base from 'data/base.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const {
		query: { offset, sort },
	} = req

	let newArr

	if (sort == 'creditAmount') {
		newArr = [...base].sort((a, b) =>
			a.rate.creditAmount.from > b.rate.creditAmount.from ? 1 : -1
		)
	} else if (sort == 'rate') {
		newArr = [...base].sort((a, b) =>
			a.rate.periods[0].rate.from > b.rate.periods[0].rate.from ? 1 : -1
		)
	} else {
		newArr = [...base]
	}



	if (offset) {
		res.json(newArr?.slice(0, +offset))
		return
	}



	res.json(base)

}
