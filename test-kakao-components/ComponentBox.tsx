import React from 'react';
import { ReactElement } from 'react';
import { SeriesPosterTable } from './SeriesPosterTable';
import KakaoAppBase from "../test-kakao-components/KakaoAppBase";

interface ComponentBoxInterface {
    title: string,
    viewType?: string,
    references?: object[],
    children: ReactElement | ReactElement[] | null
}

const ComponentBox = (props: ComponentBoxInterface) => {

    return (
        <KakaoAppBase>
        <div>
            {props.title}
        </div>
        <div>
            {props.children}
        </div>
        </KakaoAppBase>
    )
}

export default ComponentBox