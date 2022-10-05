// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {Reviews} from '../../database/models';
type Data = {
  data: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const data = JSON.parse(req.body)
    console.log(data)

    const reviews = await Reviews.create(data)
    res.status(200).json({ data: req.body })
}
