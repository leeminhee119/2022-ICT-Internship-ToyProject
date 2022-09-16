import type { NextPage } from 'next'
import Head from 'next/head'
import AppBase from '../ts-components/AppBase'
import { Thumbnail } from '../ts-components/Thumbnail'
import { Top } from '../ts-components/styled-components/style'
import { GetServerSideProps } from 'next'

/* 객체 -> 배열로 for map 함수 사용 */
function getTop(range:number, type:any) {
  const arrTop: any[] = []
  for (let i=0; i<range; i++) {
    arrTop.push(type[i+1])
  }
  return arrTop;
}

interface HomeProps {
  data: any
}

const Home: NextPage<HomeProps> = ({data}:{data:any}) => {
  const cntTop = 20;
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
            getTop(cntTop, data.data.musical).map((item) => {
              return(
                <Thumbnail key={item}
                thumbnailUrl={item.imgsrc} title={item.title} />
              )
            })
          } 
        </Top.Item>
      </Top.Section>
      <Top.Section>
        <Top.Title>콘서트 TOP {cntTop}</Top.Title>
        <Top.Item>
          {
            getTop(cntTop, data.data.concert).map((item) => {
              return(
                <Thumbnail key={item}
                thumbnailUrl={item.imgsrc} title={item.title} />
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
