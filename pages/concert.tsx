import React, { useState } from "react";
import { ReactElement } from "react";
import AppBase from '../ts-components/AppBase';
import { BodyLayout, TopBarSelectButton, } from "../ts-components/styled-components/style";
import { Thumbnail, CircleThumbnail } from '../ts-components/Thumbnail'
import { GetServerSideProps } from 'next'
import MainSectionTable from "../ts-components/MainSectionTable";

function getArtists(type:any) {
    const artists: any[] = []
    for (let i=0; i<Object.keys(type).length; i++) {
      artists.push(Object.values(type)[i])
    }
    console.log(artists)
    return artists;
}

interface ConcertInterface {
    children?: ReactElement[]|ReactElement
}

const Concert = ({data}:{data:any}, props:ConcertInterface) => {
    const [sortbyActor, setSortbyActor] = useState(true); //default: 배우별로 작품 보기
    function handleTopBarSelectBtn() {
        setSortbyActor(!sortbyActor); // 배우별로 작품 보기 <-> 지역별로 작품 보기
    }
    return (
        <AppBase title="콘서트 모아보기">
            <BodyLayout.Wrap>
            {/*박스 상단 분류기준 선택 */}
            <BodyLayout.TopBar>
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
  
            </BodyLayout.TopBar>
            <div style={{width: '100%'}}>
                {/* 박스 좌측 사이드바 */}
                <BodyLayout.SideBar_left>
                    
                </BodyLayout.SideBar_left>
                {/* 박스 중앙 메인 섹션 */}
                <BodyLayout.MainSection>
                    {
                        sortbyActor?
                        // <MainSectionTable/>
                        null:
                        null //지역
                    }

                </BodyLayout.MainSection>
                {/* 박스 우측 사이드바 */}
                <BodyLayout.SideBar_right>

                </BodyLayout.SideBar_right>
            </div>
        </BodyLayout.Wrap>
        </AppBase>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
 
    const res = await fetch(`http://localhost:3000/api/artists`)
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