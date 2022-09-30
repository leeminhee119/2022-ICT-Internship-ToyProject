import React from "react";
import { ReactElement } from "react";
import AppBase from '../../ts-components/AppBase';
import ThreeSectionTable from "../../ts-components/ThreeSectionTable";
import type { NextPage } from 'next'

interface HomeProps {
    children?: ReactElement[]|ReactElement
}

const Home: NextPage<HomeProps> = () => {
    return (
        <ThreeSectionTable title="공연 후기를 작성해주세요!" data=""></ThreeSectionTable>
    )
}

export default Home;