import React, { FC } from 'react';
import {SeriesPosterTable} from './SeriesPosterTable'

interface componentMatchInterface {
    [key:string]: any
}

const componentMatch:componentMatchInterface = {
    // "series_card_view" : null,
    "series_poster_view" : SeriesPosterTable,
    // "series_list_view" : null,
    // "square_view" : null,
    // "rectangle_view" : null,
}

const getComponent = (viewType: string) => {
    if (typeof viewType === null) {
        return <>준비중인 컴포넌트</>
    }
    return componentMatch[viewType]
}

export default getComponent