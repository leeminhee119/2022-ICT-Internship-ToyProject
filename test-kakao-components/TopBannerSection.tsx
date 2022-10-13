import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/swiper-bundle.css'
import {TopBanner} from './style'
import { ADBanner } from './style';
import { StrategyBtns } from './style';
import convertViewCount from './convertViewCount';
import { Badges } from './Badges';

import styled from 'styled-components';


const SwiperCoreElement = styled.div`
    .swiper-pagination {
        padding-left: 20px;
        padding-right: 20px;
        text-align: left;

        .swiper-pagination-bullet {
            display: inline-block;
            position: relative;
            background: none !important;
            margin: 0 !important;
            max-width: 12px;
            &.swiper-pagination-bullet-active {
                &:before {
                    background-color: #fff;
                    opacity: 1;
                }
            }
            &:before {
                content: "";
                background-color: #fff;
                display: block;
                width: 100%;
                height: 4px;
                opacity: 0.7;
            }
        }
    }
`
import SwiperCore, { Autoplay, Pagination } from 'swiper'
interface TopBannerSectionInterface {
    banner_items: any,
}
SwiperCore.use([Autoplay, Pagination])
export const TopBannerSection = (props: TopBannerSectionInterface) => {
    const pagination = {
        clickable: true,
        renderBullet: function(className:any) {
            return '<div class="swiper-pagination-bullet" data-index=\"' + className + '\" style="width:'+(90/props.banner_items.length)+'%"></div>'
        }
    }
    return(
        <SwiperCoreElement>
        <Swiper
        slidesPerView={1}
        spaceBetween={0}
        className="mySwiper"
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{
            delay: 4000
        }}
        pagination ={pagination}
        >
            {
                (props.banner_items).map((work:any, index:number) => {
                    let cnt = 0
                    if (work.service_property !== undefined) {
                        cnt = work.service_property.view_count
                    }
                    return(
                        <SwiperSlide key={index}>
                        <TopBanner.ItemImg>
                        <img className='thumbnail' src={"https://dn-img-page.kakao.com/download/resource?kid=" + work.thumbnail}/>
                            {
                                work.title_img !== undefined
                                ? <img className="title" src={"https://dn-img-page.kakao.com/download/resource?kid=" + work.title_img}/>
                                : null
                            }
                            <div className='banner_caption'>{work.caption}</div>
                            <TopBanner.ItemInfo>
                                <Badges is_event={work.operator_property.is_event}
                                is_all_free={work.is_all_free}
                                is_waitfree={work.is_waitfree}
                                is_waitfree_plus={work.is_waitfree_plus}
                                 />
                                {
                                    work.operator_property.is_view_count!==undefined
                                    ? work.operator_property.is_view_count
                                    ? <div className='banner_subinfo'>
                                        {work.category+' · '+work.sub_category+' · '+convertViewCount(cnt)}
                                        </div>
                                    : <div className='banner_subinfo'>
                                    {work.category+' · '+work.sub_category}
                                    </div>
                                    : null
                                }
                            </TopBanner.ItemInfo>
                        </TopBanner.ItemImg>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
        </SwiperCoreElement>
    )
}

export const TopADBannerSection = () => {
    return (
        <ADBanner></ADBanner>
    )
}
interface TopStrategyBtnSectionInterface {
    btn_items: any
}
export const TopStrategyBtnSection = (props:TopStrategyBtnSectionInterface) => {
    return (
        <StrategyBtns.BtnBox>
        {
            props.btn_items.map((btn:any, index:number) => {
                return (
                    <StrategyBtns.Btn key={index}>
                        {btn.title}
                        <span style={{
                            color: '#ebc634',
                            fontWeight: '100',
                            marginLeft: '5px'
                        }}>
                            {
                                btn.count !== undefined
                                ? btn.count
                                : null
                            }
                        </span>
                    </StrategyBtns.Btn>
                )
            })
        }
        </StrategyBtns.BtnBox>
    )
}