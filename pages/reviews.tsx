import React from "react";
import { ReactElement } from "react";
import AppBase from '../ts-components/AppBase';


interface ReviewsInterface {
    children?: ReactElement[]|ReactElement
}

const Reviews = (props:ReviewsInterface) => {
    return (
        <AppBase title="공연 후기">
        </AppBase>
    )
}

export default Reviews;