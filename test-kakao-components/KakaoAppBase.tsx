import React from 'react';
import { ReactElement } from 'react'

interface KakaoAppBaseInterface {
    children: ReactElement | ReactElement[]
}
const KakaoAppBase = (props:KakaoAppBaseInterface) => {
    return (
        <div style={{backgroundColor: 'rgba(0,0,0,0.4)', 
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'}}>
            <div style={{
                width: '450px',
                minHeight: '70vh',
                backgroundColor: '#fff',
            }}>
                {props.children}
            </div>
        </div>
    )

}

export default KakaoAppBase