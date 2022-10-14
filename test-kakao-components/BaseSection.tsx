import React from 'react'
import styled from 'styled-components'
import { ReactElement } from 'react'

const verticalGap = '10px'
const kakaopageBaseSection = {
    Section: styled.div`
        background-color: #fff;
        max-width: 450px;
        width: 100%;
        margin: 0 auto;
        margin-bottom: -${verticalGap};
        position: relative;
        // z-index: -2;
    `,
    TitleSection: styled.div`
        font-size: 20px;
        font-weight: 900;
        margin-bottom: ${verticalGap};
        padding: 0 15px;
    `,
    ContentSection: styled.div`
        padding: 0px 15px;
        padding-bottom: 60px;
        &.top_banner {
            padding: 0px;
            padding-bottom: 15px;
        }
        &.top_else {
            padding-bottom: 8px;
        }
        &.card_swiper {
            padding-left: 15px;
            padding-right: 0px;
        }
    `
}
interface BaseSectionInterface {
    children: ReactElement|ReactElement[],
    title?: string,
    isTopBanner?: boolean,
    isTopElse?: boolean,
    isCardSwiper?: boolean,
}
const BaseSection = (props:BaseSectionInterface) => {
    return (
        <kakaopageBaseSection.Section>
            <kakaopageBaseSection.TitleSection>
                {props.title}
            </kakaopageBaseSection.TitleSection>
            <kakaopageBaseSection.ContentSection className={
                (props.isTopBanner)
                ? 'top_banner'
                : props.isTopElse
                ? 'top_else'
                : props.isCardSwiper
                ? 'card_swiper'
                : ''
            }>
                {props.children}
            </kakaopageBaseSection.ContentSection>
        </kakaopageBaseSection.Section>
    )
}

export default BaseSection