import React from 'react';
import VerticalPoster from './VerticalPoster'

interface worksInterface {
    [key:string]: string | boolean | {view_count:number}
}
interface SeriesPosterTableInterface {
    // image_src?: string,
    // title: string,
    info_type: string, // VIEW_COUNT, AUTHOR_NAME, ISSUE_STATE
    // info_value: number | string | boolean
    // works: worksInterface
    // works: worksInterface[]
    works: any
}
export const SeriesPosterTable = (props:SeriesPosterTableInterface) => {
    // console.log(props.works)
    let infoValue: string | number | boolean = '';
    const infoType = props.info_type
    return (
        (props.works).map((work:any, index:number) => {  // 개별 작품 배열 [{},{},...]
            if (infoType === "VIEW_COUNT") {
                infoValue = work.service_property.view_count;
            } else if (infoType === "AUTHOR_NAME") {
                infoValue = work.authors;
            } else {
                infoValue = work.on_issue;
            }
            return(
                <VerticalPoster key={index}
                title={work.title}
                image_src={'https://dn-img-page.kakao.com/download/resource?kid=' + work.thumbnail}
                info_type={infoType}
                info_value={infoValue} />
            )
        })
    )
}