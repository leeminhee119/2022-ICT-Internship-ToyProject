
import React, { useState, useEffect } from "react";
import { ReactElement } from "react";

import ComponentBox from "../test-kakao-components/ComponentBox";
import getComponent from "../test-kakao-components/getComponent";
import { title } from "process";
import { SeriesPosterTable } from "../test-kakao-components/SeriesPosterTable";
import { render } from "react-dom";
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
    const filtered = layouts.filter(function(layout:any) {
        if (layout.view_data === undefined || layout.view_data.view_type === undefined) {
            return false;
        }
        return true;
    })
    console.log(filtered)
    return (
       <KakaoAppBase>
        {
            filtered.map((layout: any, index: number) => {
                // if (layout.view_data === undefined || layout.view_data.view_type === undefined) {
                //     continue
                // }
                if (layout.type === "MAIN_RANKING")  {
                    console.log(layout.title)
                    return (
                        <BaseSection key={index} 
                        title={layout.title}>
                            <div></div>
                        </BaseSection>
                    )
                }
                else if (layout.type === "BIG_BANNER") {
                    // if (layout.view_data === undefined || layout.view_data.view_type === undefined) {
                    //     return null
                    // }
                    const view_type = layout.view_data.view_type
                    const reference_key = layout.banner_data.reference_key
                    let reference = []
                    if (references[view_type] !== null && references[view_type][reference_key] !== undefined) {
                        reference = references[view_type][reference_key] // 작품들 배열
                    }
                    console.log(layout.title)
                    return (
                        <BaseSection key={index} 
                        title={layout.title}>
                            <div></div>
                        </BaseSection>
                    )
                }
                // 기타 비슷한 컴포넌트 (썸네일 테이블 또는 스와이퍼 등)
                else if (layout.type === "THEME" || layout.type === "SCROLL_THEME" || layout.type === "RECENT_VIEWED") {
                    // if (layout.view_data !== undefined || layout.view_data.view_type !== undefined) 
                    //     continue
                    
                    let view_type = layout.view_data.view_type
                    let reference_key = layout.view_data.reference_key
                    let reference = [];
                    if (references[view_type] !== null && references[view_type][reference_key] !== undefined) {
                        reference = references[view_type][reference_key] // 작품들 배열
                    }

                    let myComponent = getComponent(view_type)
                    console.log(layout.title)
                    return (
                        <BaseSection key={index} title={layout.title}>
                            <>
                            {
                                myComponent.Component === null
                                ? <>준비중</>
                                : <myComponent.Component works={reference} infoType={layout.meta_info_type}/>
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