// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {Product, Artist} from '../../database/models';

type Data = {
  data: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const concerts = await Artist.findAll({
        include: [{
            model: Product,
            where: {
                type: 'concert'
            }
        }]
    });
    res.status(200).json({ data: concerts })
}
