import React from 'react'
import { ComponentBox } from './style';
import VerticalCard from './VerticalCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper'

import 'swiper/css';
import "swiper/css/free-mode";

interface SeriesCardSwiperInterface {
    info_type: string,
    works: any,
}

export const SeriesCardSwiper = (props:SeriesCardSwiperInterface) => {
    return (
        <ComponentBox>
        <Swiper
        spaceBetween={1}
        slidesPerView={2.8}
        freeMode={true}
        modules={[FreeMode]}
        >
        {
            (props.works).map((work:any, index:number) => {  // 개별 작품 배열 [{},{},...]
                return(
                    <SwiperSlide key={index}>
                    <VerticalCard
                    image_src={'https://dn-img-page.kakao.com/download/resource?kid=' + work.asset_property.card_img}
                    title={'https://dn-img-page.kakao.com/download/resource?kid=' + work.asset_property.card_text_img}
                    view_count={work.service_property.view_count}
                    is_all_free={work.is_all_free}
                    is_waitfree={work.is_waitfree}
                    is_waitfree_plus={work.is_waitfree_plus}
                    age_grade={work.age_grade}
                    />
                    </SwiperSlide>
                )
            })
        }
        </Swiper>
        </ComponentBox>
    )
}