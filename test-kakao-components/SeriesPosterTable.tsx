import React from 'react';
import VerticalPoster from './VerticalPoster'

interface SeriesPosterTableInterface {
    // image_src?: string,
    // title: string,
    // info_type: string, // VIEW_COUNT, AUTHOR, ISSUE_STATE
    // info_value: number | string | boolean
    datas: object[]
}
export const SeriesPosterTable = (props:SeriesPosterTableInterface) => {
    return (
        (props.datas).map((index:number) => {  // 개별 작품 배열 [{},{},...]
            return(
                <VerticalPoster key={index}
                title={props.datas.title}
                image_src={props.datas.thumbnail}
                info_type={props.datas.info_type}
                info_value={props.datas.service_property.view_count} />
            )
        })
    )
}