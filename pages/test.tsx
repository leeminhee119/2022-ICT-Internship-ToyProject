
import React, { useState, useEffect } from "react";
import getComponent from "../test-kakao-components/getComponent";
import KakaoAppBase from "../test-kakao-components/KakaoAppBase";
import BaseSection from "../test-kakao-components/BaseSection";

const KakaoTest = () => {
    const [kakaopageData, setKakaopageData] = useState<any>(null);

    useEffect(() => {
        console.log("useEffect")
        fetch('/api/test-kakao', {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then((response) => response.json())
        .then(res => {
            setKakaopageData(res.data);
        })
    }, [])

    if(kakaopageData == null) {
        return <div>
            로딩중
        </div>;
    }
    // console.log("kakaopageData", kakaopageData);
   
    const layouts = kakaopageData.result.layout;
    console.log(layouts)
    const references = kakaopageData.result.reference;
    return (
       <KakaoAppBase>
        {
            layouts.map((layout: any, index: number) => {
                // if (layout.view_data === undefined || layout.view_data.view_type === undefined) {
                //     continue
                // }
                if (layout.type === "TOP")  {
                    const banner_view_type = layout.banner_data.view_type  //square_view
                    const banner_reference_key = layout.banner_data.reference_key
                    let banner_reference = [];
                    if (references[banner_view_type] !== null && references[banner_view_type][banner_reference_key] !== undefined) {
                        banner_reference = references[banner_view_type][banner_reference_key] // banner data 배열
                    }
                    const banner_myComponent = getComponent(banner_view_type)

                    const strategy_view_type = layout.strategy_data.view_type //strategy_view
                    const strategy_reference_key = layout.strategy_data.reference_key
                    let strategy_reference = [];
                    if (references[strategy_view_type] !== null && references[strategy_view_type][strategy_reference_key] !== undefined) {
                        strategy_reference = references[strategy_view_type][strategy_reference_key] // banner data 배열
                    }
                    const strategy_myComponent = getComponent(strategy_view_type)
                    return (
                        <div key={index}>
                            <BaseSection isTopBanner={true}>
                                <>
                                {
                                    banner_myComponent.Component === null || banner_reference.length === 0
                                    ? <div>데이터가 없습니다.</div>
                                    :<banner_myComponent.TopComponent banner_items={banner_reference}/>
                                }
                                </>
                            </BaseSection>
                            <BaseSection isTopElse={true}>
                                <banner_myComponent.BottomComponent/>
                            </BaseSection>
                            <BaseSection>
                                <strategy_myComponent.Component btn_items={strategy_reference}/>
                            </BaseSection>
                        </div>
                    )
                }
                else if (layout.type === "MAIN_RANKING")  {
                    // 실시간랭킹 작품 데이터 없음 -> series_card_view의 데이터로 대체
                    const webtoon_reference = references['series_card_view']["page/reference/0/390/0/F/IOS"]
                    const webnovel_reference = references['series_card_view']["page/reference/0/429/0/F/IOS"]
                    const myComponent = getComponent('series_list_view')
                    return (
                        <BaseSection key={index} title={layout.title}>
                            <myComponent.Component webtoon_works={webtoon_reference} webnovel_works={webnovel_reference} />
                        </BaseSection>
                    )
                }
                else if (layout.type === "BIG_BANNER") {
                    const view_type = layout.banner_data.view_type
                    const reference_key = layout.banner_data.reference_key
                    let reference = []
                    if (references[view_type] !== null && references[view_type][reference_key] !== undefined) {
                        reference = references[view_type][reference_key] // 작품들 배열
                    }
                    const myComponent = getComponent(view_type)
                    // console.log(reference)
                    return (
                        <BaseSection key={index} title={layout.title}>
                            <>
                            {
                                myComponent.Component === null || reference.length === 0
                                ? <myComponent.Component banner_items={reference}/>
                                :<myComponent.Component banner_items={reference}/>
                            }
                            </>
                        </BaseSection>
                    )
                }
                // 기타 비슷한 컴포넌트 (썸네일 테이블 또는 스와이퍼 등)
                else if (layout.type === "THEME" || layout.type === "SCROLL_THEME" || layout.type === "RECENT_VIEWED") {
                    const view_type = layout.view_data.view_type
                    const reference_key = layout.view_data.reference_key
                    let reference = [];
                    if (references[view_type] !== null && references[view_type][reference_key] !== undefined) {
                        reference = references[view_type][reference_key] // 작품들 배열
                    }
                    const myComponent = getComponent(view_type)
                    return (
                        <BaseSection key={index} title={layout.title}
                        isCardSwiper={view_type=="series_card_view" ? true:false}>
                            <>
                            {
                                myComponent.Component === null || reference.length === 0
                                ? <div>데이터가 없습니다.</div>
                                :<myComponent.Component works={reference} info_type={layout.meta_info_type}/>
                            }
                            </>
                        </BaseSection>
                    )
                }
            })
        }
       </KakaoAppBase>
    )
};

export default KakaoTest;