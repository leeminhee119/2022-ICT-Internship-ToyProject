import type { NextPage } from 'next'
import Head from 'next/head'
import AppBase from '../ts-components/AppBase'
import { Thumbnail } from '../ts-components/Thumbnail'
import { Top } from '../ts-components/styled-components/style'
import { GetServerSideProps } from 'next'

interface HomeProps {
  data: any
}

const Home: NextPage<HomeProps> = ({data}:{data:any}) => {
  const cntTop = 20;
  const musicalRanking = new Array;
  const concertRanking = new Array;
  
  /* musical, concert 데이터 분리 */
  for (let i=0; i<data.data.length; i++) {
    const thisdata = data.data[i]
    if (thisdata.type == 'musical' && thisdata.ranking <= cntTop) {
      musicalRanking.push(thisdata)
    } else if (thisdata.type == 'concert' && thisdata.ranking <= cntTop) {
      concertRanking.push(thisdata)
    }
  }
  return (
    <>
    <Head>
      <title>뮤콘 : 뮤지컬 콘서트 200% 즐기기</title>
    </Head>
    <AppBase>
      <div style={{
        display: 'flex',
      }}>
      <Top.Section>
        <Top.Title>뮤지컬 TOP {cntTop}</Top.Title>
        <Top.Item>
          {
            musicalRanking.map((prd: any, index) => {
              return(
                <Thumbnail key={index}
                thumbnailUrl={prd.thumbnail_url} 
                title={prd.title}
                reservationHref={prd.reservation_url} />
              )
            })
          }
        </Top.Item>
      </Top.Section>
      <Top.Section>
        <Top.Title>콘서트 TOP {cntTop}</Top.Title>
        <Top.Item>
          {
            concertRanking.map((prd:any, index) => {
              return(
                <Thumbnail key={index}
                thumbnailUrl={prd.thumbnail_url} 
                title={prd.title}
                reservationHref={prd.reservation_url} />
              )
            })
          }
        </Top.Item>
      </Top.Section>
      </div>
    </AppBase>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
 
  const res = await fetch(`http://localhost:3000/api/products_withranking`)
  const data = await res.json()

   if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return { props: { data: data } }
}

export default Home
