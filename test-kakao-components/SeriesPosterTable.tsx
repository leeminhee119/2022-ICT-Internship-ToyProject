import React from 'react';
import { ComponentBox } from './style';
import VerticalPoster from './VerticalPoster'
import convertViewCount from './convertViewCount'

interface worksInterface {
    [key:string]: string | boolean | {view_count:number}
}
interface SeriesPosterTableInterface {
    info_type: string, // VIEW_COUNT, AUTHOR_NAME, ISSUE_STATE
    works: any
}
export const SeriesPosterTable = (props:SeriesPosterTableInterface) => {
    // console.log(props.works)
    let infoValue: string | number | boolean = '';
    const infoType = props.info_type
    // 항상 6개까지만 뜨도록
    let six_works = props.works
    if (props.works.length > 6) {
        six_works = props.works.slice(0,6)
    }
    return (
        <ComponentBox>
            {
                six_works === undefined || six_works === null
                ? <div>비어있음</div>
                :(six_works).map((work:any, index:number) => {
                    if (infoType === "VIEW_COUNT") {
                        infoValue = convertViewCount(work.service_property.view_count)
                    } else if (infoType === "AUTHOR_NAME") {
                        infoValue = work.authors;
                    } else if (infoType === "ISSUE_STATE") {
                        work.on_issue == true 
                        ? infoValue = "연재중"
                        : infoValue = "완결"
                    } else {
                        infoValue = work.category
                    }
                    return(
                        <VerticalPoster key={index}
                        title={work.title}
                        image_src={'https://dn-img-page.kakao.com/download/resource?kid=' + work.thumbnail}
                        info_value={infoValue} />
                    )
                })
            }
        </ComponentBox>
    )
}