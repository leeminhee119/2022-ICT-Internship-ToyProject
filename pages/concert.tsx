import React, { useState } from "react";
import { ReactElement } from "react";
import AppBase from '../ts-components/AppBase';
import { BodyLayout, TopBarSelectButton, } from "../ts-components/styled-components/style";
import { Thumbnail, CircleThumbnail } from '../ts-components/Thumbnail'
import { GetServerSideProps } from 'next'
import MainSectionTable from "../ts-components/MainSectionTable";
import FourSectionTable from "../ts-components/FourSectionTable";



const Concert = ({data}:any) => {
  const [sortbyActor, setSortbyActor] = useState(true); //default: 배우별로 작품 보기
  function handleTopBarSelectBtn() {
      setSortbyActor(!sortbyActor); // 배우별로 작품 보기 <-> 지역별로 작품 보기
  }
    return (
        <FourSectionTable title="콘서트 모아보기"
        data={data.data}
        leftChildren={[
          <TopBarSelectButton.Wrap>
            <TopBarSelectButton.Btn 
                onClick={handleTopBarSelectBtn}
                className={sortbyActor?'selected':''}
            >배우별로 공연 보기</TopBarSelectButton.Btn>
            <TopBarSelectButton.Btn
                onClick={handleTopBarSelectBtn}
                className={!sortbyActor?'selected':''}
            >지역별로 공연 보기</TopBarSelectButton.Btn>
          </TopBarSelectButton.Wrap>
        ]} />
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
 
    const res = await fetch(`http://localhost:3000/api/a_p_concert`)
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

export default Concert;