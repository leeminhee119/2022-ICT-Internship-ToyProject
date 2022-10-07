import React from 'react'
import styled from 'styled-components'
import { ReactElement } from 'react'

const kakaopageBaseSection = {
    Section: styled.div`
        background-color: #fff;
        width: 450px;
        padding: 20px 15px;
    `,
    TitleSection: styled.div`
        font-size: 20px;
        font-weight: 900;
        margin-bottom: 15px;
    `,
    ContentSection: styled.div`
    `
}
interface BaseSectionInterface {
    children: ReactElement|ReactElement[],
    title: string,
}
const BaseSection = (props:BaseSectionInterface) => {
    return (
        <kakaopageBaseSection.Section>
            <kakaopageBaseSection.TitleSection>
                {props.title}
            </kakaopageBaseSection.TitleSection>
            <kakaopageBaseSection.ContentSection>
                {props.children}
            </kakaopageBaseSection.ContentSection>
        </kakaopageBaseSection.Section>
    )
}

export default BaseSection