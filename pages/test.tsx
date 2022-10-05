
import React, { useState, useEffect } from "react";
import { ReactElement } from "react";
import KakaoAppBase from "../test-kakao-components/KakaoAppBase";
import { SeriesPosterTable } from "../test-kakao-components/SeriesPosterTable";

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
    console.log("kakaopageData", kakaopageData);
    
    const components = kakaopageData.data.result.layout
    const seriesPosterViews = components.filter((component: any) => {
        component.view_data.view_type === "series_poster_view"
    })
    seriesPosterViews.forEach((component: any) => {
        if (component.view_data.reference_key in kakaopageData.data.result.reference.series_poster_view) {\
            
        }
    })
    
    return (
        <KakaoAppBase>
            {/* <SeriesPosterTable datas={} /> */}
        </KakaoAppBase>
    )
}

export default KakaoTest;