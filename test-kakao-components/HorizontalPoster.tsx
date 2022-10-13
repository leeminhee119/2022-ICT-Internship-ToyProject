import React from 'react';
import { PosterHorizontal, BadgeStyle } from './style';
import { Badges } from './Badges';
import { AgeLimitBadge } from './AgeLimitBadge';
import {ThumbnailInterface} from './interface'

// interface HorizontalPosterInterface {
//     image_src?: string,
//     title: string,
//     info_value: string,
//     rank?: number,
//     is_all_free: boolean,
//     is_waitfree: boolean,
//     is_waitfree_plus: boolean
// }
const HorizontalPoster = (props:ThumbnailInterface) => {
    return (
        <PosterHorizontal.Item>
            <PosterHorizontal.ItemImg>
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
            </PosterHorizontal.ItemImg>
            <PosterHorizontal.InfoSection>
                <PosterHorizontal.ItemRank>
                    {props.rank}
                </PosterHorizontal.ItemRank>
                <PosterHorizontal.ItemTitle>
                    {props.title}
                </PosterHorizontal.ItemTitle>
                <PosterHorizontal.ItemInfo>
                    {props.info_value}
                </PosterHorizontal.ItemInfo>
            </PosterHorizontal.InfoSection>
        </PosterHorizontal.Item>
    )
}

export default HorizontalPoster