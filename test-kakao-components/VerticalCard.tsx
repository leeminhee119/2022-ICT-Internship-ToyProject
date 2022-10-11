import React from 'react';
import { Card } from './style'
interface VerticalCardInterface {
    image_src?: string,
    title_image_src?: string,
}
const VerticalCard = (props:VerticalCardInterface) => {
    return (
        <Card.Item>
            <Card.ItemImg>
                {
                    props.image_src === null || props.image_src === ''
                    ? <div className='default-img' />
                    : <><img src={props.image_src} />
                    <img src={props.title_image_src} /></>
                }
            </Card.ItemImg>
        </Card.Item>
        // </div>
    )
}

export default VerticalCard