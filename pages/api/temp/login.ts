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
    let result = {
      isLogin: false
    }
    /*
    데이터를 입력 받기
    ID가 'mhl98'
    
    PW: 'aaaa1234'
    쿠키를 넣어주세요.
    */
    if (req.cookies.userID == 'mhl98' && req.cookies.userPW == 'aaa1234') {
      result.isLogin = true;
    }

    res.status(200).json( {data:result} )
}
