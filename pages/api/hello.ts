// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import musical from '../../musicalRank.json'
import concert from '../../concertRank.json'
// import musicalArtist from '../../musicalArtists.json'
// import concertArtist from '../../concertArtists.json'

type Data = {
  data: any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ data: {musical, concert} })
}
