import React, { FC } from 'react';
import {SeriesPosterTable} from './SeriesPosterTable'

interface componentDictInterface {
    [key:string]: any
}
const notReady = () => {
    return (
        <div>준비중인 컴포넌트</div>
    )
}
const componentDict:componentDictInterface = {
    // "series_card_view" : null,
    series_card_view : {
        Component: null,
    },
    single_card_view : {
        Component: null,
    },
    series_poster_view : {
        Component: SeriesPosterTable,
    },
    single_poster_view : {
        Component: null,
    },
    series_list_view : {
        Component: null,
    },
    single_list_view : {
        Component: null,
    },
    square_view : {
        Component: null,
    },
    rectangle_view : {
        Component: null,
    },
    strategy_view : {
        Component: null,
    },
}

const getComponent = (viewType: string) => {
    if (typeof componentDict[viewType] === undefined || typeof componentDict[viewType] === null) {
        return notReady;
    }
    return componentDict[viewType]
}

export default getComponent