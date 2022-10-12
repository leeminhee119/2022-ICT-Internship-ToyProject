import React, { FC } from 'react';
import {SeriesPosterTable} from './SeriesPosterTable'
import {SeriesCardSwiper} from './SeriesCardSwiper'
import {BannerSwiper} from './BannerSwiper'
import {RankSeriesPosterList} from './RankSeriesPosterList'
import {TopBannerSection} from './TopBannerSection'
import {TopADBannerSection} from './TopBannerSection'
import { TopStrategyBtnSection } from './TopBannerSection';
import { ADBanner } from './style';

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
        Component: SeriesCardSwiper
    },
    single_card_view : {
        Component: null,
    },
    series_poster_view : {
        Component: SeriesPosterTable
    },
    single_poster_view : {
        Component: null,
    },
    series_list_view : {
        Component: RankSeriesPosterList
    },
    single_list_view : {
        Component: null,
    },
    square_view : {
        TopComponent: TopBannerSection,
        BottomComponent: TopADBannerSection
    },
    rectangle_view : {
        Component: BannerSwiper
    },
    strategy_view : {
        Component: TopStrategyBtnSection
    },
}

const getComponent = (viewType: string) => {
    if (typeof componentDict[viewType] === undefined || typeof componentDict[viewType] === null) {
        return notReady();
    }
    return componentDict[viewType]
}

export default getComponent