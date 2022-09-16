import React from "react";
import { ReactElement } from "react";
import {muconAppBaseStyle} from './styled-components/style';
import NavBar from '../ts-components/NavBar';
import SearchBar from '../ts-components/SearchBar'
import Link from "next/link";


interface AppBaseInterface {
    children?: ReactElement[]|ReactElement,
    title?: string
}

const AppBase = (props:AppBaseInterface) => {
    return (
        <muconAppBaseStyle.Body>
            <muconAppBaseStyle.App.Box>
                <muconAppBaseStyle.App.Header.Header>
                    <muconAppBaseStyle.App.Header.LogoSection>
                        <Link href="/">
                        <a>MuCon</a>
                        </Link>
                    </muconAppBaseStyle.App.Header.LogoSection>
                    <muconAppBaseStyle.App.Header.NavAndSearchSection>
                        <SearchBar></SearchBar>
                        <NavBar></NavBar>
                    </muconAppBaseStyle.App.Header.NavAndSearchSection>
                </muconAppBaseStyle.App.Header.Header>
                {
                    props.title == null?
                    null:
                    <muconAppBaseStyle.App.TitleBox>{props.title}</muconAppBaseStyle.App.TitleBox>
                }
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                <muconAppBaseStyle.App.BodyBox>
                    {
                        props.children == null?
                        null:
                        props.children
                    }
                </muconAppBaseStyle.App.BodyBox>
                </div>
            </muconAppBaseStyle.App.Box>
        </muconAppBaseStyle.Body>
    )
}

export default AppBase;