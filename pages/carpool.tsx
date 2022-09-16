import React from "react";
import { ReactElement } from "react";
import AppBase from '../ts-components/AppBase';


interface CarPoolInterface {
    children?: ReactElement[]|ReactElement
}

const CarPool = (props:CarPoolInterface) => {
    return (
        <AppBase title="동행 구하기">
        </AppBase>
    )
}

export default CarPool;