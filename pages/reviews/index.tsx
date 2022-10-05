import React from "react";
import { ReactElement } from "react";
import AppBase from '../../ts-components/AppBase';
import ThreeSectionTable from "../../ts-components/ThreeSectionTable";
import type { NextPage } from 'next'
import Link from "next/link";
import styled from 'styled-components';
import { themeColor } from '../../ts-components/commonVariables';

interface HomeProps {
    children?: ReactElement[]|ReactElement
}

const Home: NextPage<HomeProps> = () => {
    const left = () => {return(
        <Link href="reviews/post"><PostBtn>후기 작성하기</PostBtn></Link>
    )}
    return (
        <ThreeSectionTable title="공연 후기" data="" leftSection={left()}>
            
        </ThreeSectionTable>
    )
}

const PostBtn = styled.button`
    border-radius: 20px;
    color: #fff;
    background-color: ${themeColor};
    font-weight: 900;
    padding: 8px 15px;
    text-align: center;
    margin-top: 30px;
    &:hover {
        text-shadow : 5px -1px 0 black;
        transition: ease-in-out 0.3s;
    }
`

export default Home;