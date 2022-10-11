import React from 'react';
import { Poster, PosterHorizontal } from './style'
interface HorizontalPosterInterface {
    image_src?: string,
    title: string,
    info_value: string,
    rank?: number
}
const HorizontalPoster = (props:HorizontalPosterInterface) => {
    return (
        <PosterHorizontal.Item>
            <PosterHorizontal.ItemImg>
                {
                    props.image_src === null || props.image_src === ''
                    ? <div className='default-img' />
                    : <img src={props.image_src} />
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