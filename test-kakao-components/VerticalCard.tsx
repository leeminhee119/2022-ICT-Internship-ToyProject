import React from 'react';
import { Card, BadgeStyle } from './style';
import { Badges } from './Badges';
import { AgeLimitBadge } from './AgeLimitBadge';
import convertViewCount from './convertViewCount'
import {ThumbnailInterface} from './interface'

// interface VerticalCardInterface {
//     image_src?: string,
//     title_image_src?: string,
//     view_count: number,
//     is_all_free: boolean,
//     is_waitfree: boolean,
//     is_waitfree_plus: boolean,
//     age_grade: number,
// }
const VerticalCard = (props:ThumbnailInterface) => {
    const cntText = convertViewCount(props.view_count)
    return (
        <Card.Item>
            <Card.ItemImg>
                {
                    props.image_src === null || props.image_src === ''
                    ? <div className='default-img' />
                    : <><img className="thumbnail" src={props.image_src} />
                    <img className="title" src={props.title} />
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '3px',
                    }}>
                        <Badges is_all_free={props.is_all_free}
                        is_waitfree={props.is_waitfree}
                        is_waitfree_plus={props.is_waitfree_plus}
                        />
                         <AgeLimitBadge age_grade={props.age_grade} />
                    <div style={{
                        backgroundColor: 'black',
                        borderRadius: '4px',
                        color: '#fff',
                        fontSize: '10px',
                        fontWeight: '100',
                        padding: '1px 5px',
                        zIndex: '100'
                    }}> {cntText} </div>
                    </div>
                    </>
                    
                }
            </Card.ItemImg>
        </Card.Item>
        // </div>
    )
}

export default VerticalCard