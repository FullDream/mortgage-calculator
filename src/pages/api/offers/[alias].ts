import type { NextApiRequest, NextApiResponse } from 'next'

import base from 'data/base.json'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { alias } = req.query

  const [findOneRes] = base.filter(item=> item.alias == alias)

	res.json(findOneRes)
}
