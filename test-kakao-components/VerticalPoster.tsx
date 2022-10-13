import React from 'react';
import { Poster, BadgeStyle } from './style';
import { Badges } from './Badges';
import { AgeLimitBadge } from './AgeLimitBadge';
import {ThumbnailInterface} from './interface';
// interface VerticalPosterInterface {
//     image_src?: string,
//     title: string,
//     info_value: string,
//     is_all_free: boolean,
//     is_waitfree: boolean,
//     is_waitfree_plus: boolean,
//     age_grade: number,
// }
const VerticalPoster = (props:ThumbnailInterface) => {
    return (
        <Poster.Item>
            <Poster.ItemImg>
                {
                    props.image_src === null || props.image_src === ''
                    ? <div className='default-img' />
                    : <><img className='thumbnail' src={props.image_src} />
                    <Badges is_all_free={props.is_all_free}
                    is_waitfree={props.is_waitfree}
                    is_waitfree_plus={props.is_waitfree_plus}
                    imgStyle={BadgeStyle}
                    />
                    <AgeLimitBadge age_grade={props.age_grade} />
                    </>

                }
            </Poster.ItemImg>
            <Poster.ItemTitle>
                {props.title}
            </Poster.ItemTitle>
            <Poster.ItemInfo>
                {props.info_value}
            </Poster.ItemInfo>
        </Poster.Item>
    )
}

export default VerticalPoster