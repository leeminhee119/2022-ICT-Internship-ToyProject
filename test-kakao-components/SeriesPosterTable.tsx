import React from 'react';
import VerticalPoster from './VerticalPoster'

interface SeriesPosterTableInterface {
    // image_src?: string,
    // title: string,
    // info_type: string, // VIEW_COUNT, AUTHOR, ISSUE_STATE
    // info_value: number | string | boolean
    works: object[]
}
export const SeriesPosterTable = (props:SeriesPosterTableInterface) => {
    return (
        (props.works).map((work:object, index:number) => {  // 개별 작품 배열 [{},{},...]
            return(
                <VerticalPoster key={index}
                title={work.title}
                image_src={work.thumbnail}
                // info_type={work.info_type}
                info_value={work.service_property.view_count} />
            )
        })
    )
}