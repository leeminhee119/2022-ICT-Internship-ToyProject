// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Product from '../../database/models/Product'
import Sequelize from 'sequelize';
type Data = {
  data: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const products = await Product.findAll({
        where: {
            ranking: {
                [Sequelize.Op.ne]: null
            }
        }
    });
    res.status(200).json({ data: products })
}
