// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {Product} from '../../database/models';
import Sequelize from 'sequelize';
import fs from 'fs';
type Data = {
  data: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const data = fs.readFileSync('kakaopage-json-text.txt', 'utf8')
    let jsonData = JSON.parse(data)
    res.status(200).json({ data: jsonData})
}
