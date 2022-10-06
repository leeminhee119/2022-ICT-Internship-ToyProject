import React from 'react';
import { ReactElement } from 'react';
import { SeriesPosterTable } from './SeriesPosterTable';

interface ComponentBoxInterface {
    title: string,
    viewType?: string,
    references?: object[],
    children: ReactElement | ReactElement[] | null
}

const ComponentBox = (props: ComponentBoxInterface) => {

    return (
        <>
        <div>
            {props.title}
        </div>
        <div>
            {props.children}
        </div>
        </>
    )
}

export default ComponentBox