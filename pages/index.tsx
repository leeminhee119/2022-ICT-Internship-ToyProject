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
  const muscialValues = Object.values(data.data.musical);
  const concertValues = Object.values(data.data.concert);
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
            muscialValues.map((prd, index) => {
              return(
                <Thumbnail key={index}
                thumbnailUrl={prd.thumbnailUrl} 
                title={prd.title}
                reservationHref={prd.reservationHref} />
              )
            })
          }
        </Top.Item>
      </Top.Section>
      <Top.Section>
        <Top.Title>콘서트 TOP {cntTop}</Top.Title>
        <Top.Item>
          {
            concertValues.map((prd:any, index) => {
              return(
                <Thumbnail key={index}
                thumbnailUrl={prd.thumbnailUrl} 
                title={prd.title}
                reservationHref={prd.reservationHref} />
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
 
  const res = await fetch(`http://localhost:3000/api/hello`)
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
