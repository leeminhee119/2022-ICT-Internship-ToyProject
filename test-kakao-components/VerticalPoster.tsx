import React from 'react';
import { Poster } from './style'
interface VerticalPosterInterface {
    image_src?: string,
    title: string,
    info_value: string
}
const VerticalPoster = (props:VerticalPosterInterface) => {
    return (
        <Poster.Item>
            <Poster.ItemImg>
                {
                    props.image_src === null || props.image_src === ''
                    ? <div className='default-img' />
                    : <img src={props.image_src} />
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