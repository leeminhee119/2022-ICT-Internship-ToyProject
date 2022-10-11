import React, {useState, useEffect} from 'react';
import { ComponentBox } from './style';
import HorizontalPoster from './HorizontalPoster'
import styled from 'styled-components';

interface RankSeriesPosterListInterface {
    webtoon_works: any,
    webnovel_works: any,
}
const SelectType = {
    BtnBox: styled.div`
        margin-bottom: 15px;
    `,
    Btn: styled.button`
        border: 1.5px solid rgba(0,0,0,0);
        border-radius: 20px;
        padding: 3px 9px;
        font-size: 5px;
        &.on {
            border: 1.5px solid black;
            border-radius: 20px;
        }
    `
}
export const RankSeriesPosterList = (props:RankSeriesPosterListInterface) => {
    const [selectedType, setSelectedType] = useState('webtoon')
    const [currentType, setCurrentType] = useState(props.webtoon_works)
    function handleSelectType(event: any) {
        setSelectedType((type:string) => type = event.target.value)
    }
    useEffect(() => {
        if (selectedType === 'webtoon') {
            setCurrentType((array: any) => array = props.webtoon_works)
        } else {
            setCurrentType((array: any) => array = props.webnovel_works)
        }
    }, [selectedType])
    return (
        <ComponentBox>
            <SelectType.BtnBox>
                {
                    ['webtoon', 'webnovel'].map((category: string, index: number) => {
                        return (
                            <SelectType.Btn
                            key={index}
                            className={selectedType===category?'on':''}
                            value={category}
                            onClick={handleSelectType}
                            >{category==='webtoon'?'웹툰':'웹소설'}</SelectType.Btn>
                        )
                    })
                }
            </SelectType.BtnBox>
            {
                currentType.map((work:any, index:number) => {
                    let cnt = work.service_property.view_count
                    let viewCount = ''
                    if (cnt >= 100000000) {
                        cnt = cnt / 100000000;
                        viewCount = cnt.toLocaleString('ko-KR', {maximumFractionDigits: 1}) + "억"
                    }
                    if (cnt >= 10000) {
                        cnt = cnt / 10000
                        viewCount = cnt.toLocaleString('ko-KR', {maximumFractionDigits: 1}) + "만"
                    } else {
                        viewCount = work.service_property.view_count.toString()
                    } 
                    const infoValue = work.sub_category+' · '+viewCount+' · '+work.authors
                    return (
                        <HorizontalPoster key={index}
                        title={work.title}
                        image_src={'https://dn-img-page.kakao.com/download/resource?kid=' + work.thumbnail}
                        info_value={infoValue}
                        rank={index+1} />
                    )
                })
            }
        </ComponentBox>
    )
}