import React, { useState } from "react";
import { ReactElement } from "react";
import AppBase from '../ts-components/AppBase';
import { BodyLayout, TopBarSelectButton, } from "../ts-components/styled-components/style";
import { themeColor } from "../ts-components/commonVariables";
import { Thumbnail } from '../ts-components/Thumbnail'

function getArtists(type:any) {
    const artists: any[] = []
    for (let i=0; i<Object.keys(type).length; i++) {
      artists.push(Object.values(type)[i])
    }
    return artists;
}


interface MusicalInterface {
    children?: ReactElement[]|ReactElement,
}
const Musical = (props:MusicalInterface) => {
    const [sortbyActor, setSortbyActor] = useState(true); //default: 배우별로 작품 보기
    function handleTopBarSelectBtn() {
        setSortbyActor(!sortbyActor); // 배우별로 작품 보기 <-> 지역별로 작품 보기
    }
    return (
        <>
        <AppBase title="뮤지컬 모아보기">
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
            {/* 박스 좌측 사이드바 */}
            <BodyLayout.SideBar_left>
                
            </BodyLayout.SideBar_left>
            {/* 박스 중앙 메인 섹션 */}
            <BodyLayout.MainSection>
                {/* {
                    getArtists(data.musicalArtists).map((item) => {
                        return(
                          <Thumbnail key={item}
                          thumbnailUrl={item.imgsrc} title={item.name} />
                        )
                    })
                } */}
            </BodyLayout.MainSection>
            {/* 박스 우측 사이드바 */}
            <BodyLayout.SideBar_right>

            </BodyLayout.SideBar_right>
        </BodyLayout.Wrap>
        </AppBase>
        </>
    )
}

export default Musical;