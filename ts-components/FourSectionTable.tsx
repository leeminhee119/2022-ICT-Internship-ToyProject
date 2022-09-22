import React, { useState } from "react";
import { ReactElement } from "react";
import AppBase from '../ts-components/AppBase';
import styled from "styled-components";
import { BodyLayout, TopBarSelectButton, } from "../ts-components/styled-components/style";
import MainSectionTable from "../ts-components/MainSectionTable";
import { themeColor } from "./commonVariables";
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FourSectionTableInterface {
    typeMuCon: string,
    data: any,
}
const FourSectionTable = (props:FourSectionTableInterface) => {
    const [sortbyActor, setSortbyActor] = useState(true); //default: 배우별로 작품 보기
    function handleTopBarSelectBtn() {
        setSortbyActor(!sortbyActor); // 배우별로 작품 보기 <-> 지역별로 작품 보기
    }
    return (
        <>
        <AppBase title={props.typeMuCon == 'musical'?'뮤지컬 모아보기':'콘서트 모아보기'}>
        <BodyLayout.Wrap>
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
            <BodyLayout.SideBar_left>
                
            </BodyLayout.SideBar_left>
            <BodyLayout.MainSection>
                {
                    sortbyActor?
                    <MainSectionTable
                    artistsData={props.data}/>
                    :
                    null //지역
                }
            </BodyLayout.MainSection>
            <BodyLayout.SideBar_right>
                <SearchBox>
                    <SearchBoxTitle>Search </SearchBoxTitle>
                    <SearchBoxInputOuterBox>
                        <SearchBoxInput placeholder="검색어를 입력하세요"></SearchBoxInput>
                        <FontAwesomeIcon icon={faCircleArrowRight}
                        style={{
                            color: themeColor,
                            marginRight: '5px',
                            fontSize: '20px'
                        }} />
                    </SearchBoxInputOuterBox>
                </SearchBox>
            </BodyLayout.SideBar_right>
        </BodyLayout.Wrap>
        </AppBase>
        </>
    )
}

const SearchBox = styled.div`
    padding: 2px;
    margin: 40px 10px;
`;
const SearchBoxTitle = styled.div`
    color: ${themeColor};
    margin-left: 5px;
    margin-bottom: 5px;
    font-weight: 900;
`
const SearchBoxInputOuterBox = styled.div`
    border: 1px solid ${themeColor};
    border-radius: 20px;
    display: flex;
    align-items: center;
`
const SearchBoxInput = styled.input`
    color: ${themeColor};
    width: 100%;
    padding: 7px;
    &::placeholder {
        color: ${themeColor};
        opacity: 30%;
    }
`
export default FourSectionTable;