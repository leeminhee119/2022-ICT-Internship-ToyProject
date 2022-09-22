// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// import musicalArtist from '../../musicalArtists.json'
// import concertArtist from '../../concertArtists.json'

type Data = {
  data: any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    console.log('쿠키 어디있어요?');
    //여기서 쿠키 내용 출력
    let result = {
        value: 'hi'
    }
    res.status(200).json( {data:result} )
}
