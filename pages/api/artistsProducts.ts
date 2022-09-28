// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import ArtistsProducts from '../../database/models/ArtistsProducts'
type Data = {
  data: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const artistsProducts = await ArtistsProducts.findAll();
  res.status(200).json({ data: JSON.stringify(artistsProducts) })
}
