import React from 'react';
import { Poster } from './style'
interface VerticalPosterInterface {
    image_src?: string,
    title: string,
    info_type: string, // VIEW_COUNT, AUTHOR, ISSUE_STATE
    info_value: number | string | boolean
}
const VerticalPoster = (props:VerticalPosterInterface) => {
    /* 부가 정보 유형따라 string으로 처리 */
    let info_result = '';
    if (props.info_type === 'VIEW_COUNT' && typeof props.info_value === "number") {
        // 받은 숫자값 45003920을 4,500.3만 문자열로 변환
        info_result = props.info_value.toString()
    } else if (props.info_type === "ISSUE_STATE" && typeof props.info_value === "boolean") {
        props.info_value
        ? info_result = '연재중'
        : info_result = '완결'
    } else if (props.info_type === "AUTHOR" && typeof props.info_value === "string") {
        info_result = props.info_value
    }

    return (
        <Poster.Item>
            <Poster.ItemImg>
                {
                    props.image_src === null || props.image_src === ''
                    ? <div className='default-img' />
                    : <img src={props.image_src} />
                }
            </Poster.ItemImg>
            <Poster.ItemInfo>
                {info_result}
            </Poster.ItemInfo>
        </Poster.Item>
    )
}

export default VerticalPoster