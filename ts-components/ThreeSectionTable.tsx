import React, { ReactComponentElement, useState } from "react";
import { ReactElement } from "react";
import AppBase from '../ts-components/AppBase';
import styled from "styled-components";
import { BodyLayout, TopBarSelectButton, } from "../ts-components/styled-components/style";
import MainSectionTable from "../ts-components/MainSectionTable";
import { themeColor } from "./commonVariables";
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface ThreeSectionTableInterface {
    title: string,
    data: any,
}
const ThreeSectionTable = (props:ThreeSectionTableInterface) => {
    return (
        <>
        <AppBase title={props.title}>
        <BodyLayout.Wrap>
            <BodyLayout.SideBar_left>
                <Link href='/reviews/post'><button >글쓰기</button></Link>
            </BodyLayout.SideBar_left>
            <BodyLayout.MainSection className="long"> {/*long 클래스: topbar 만큼의 길이 채워줌 */}
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
export default ThreeSectionTable;