import React from 'react';
import { ReactElement } from 'react'

interface KakaoAppBaseInterface {
    children: ReactElement | ReactElement[]
}
const KakaoAppBase = (props:KakaoAppBaseInterface) => {
    return (
        <div style={{backgroundColor: 'rgba(0,0,0,0.4)', 
            minHeight: '100vh',
            width: '100%',
            paddingTop: '20px',
            position: 'relative',
            // zIndex: '-100'
        }}>
            {props.children}
        </div>
    )

}

export default KakaoAppBase