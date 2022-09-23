// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    console.log('쿠키 어디있어요?');
    console.log(req.cookies);
    const isLogin = typeof req.cookies.userID != 'undefined'?true:false
    // console.log
    //여기서 쿠키 내용 출력
    let result = {
      isLogin: isLogin
    }
    res.status(200).json( {data:result} )
}
