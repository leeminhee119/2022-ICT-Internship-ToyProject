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
            padding: '50px 300px'}}>
            {props.children}
        </div>
    )

}

export default KakaoAppBase