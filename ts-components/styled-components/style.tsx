import styled, { StyledComponent } from "styled-components";
import { themeColor, subColor } from "../commonVariables";

const body_height = 85;
const BODY_HEIGHT = body_height + 'vh';
export const Title = styled.div`
    color: ${themeColor};
    font-size: 25px;
    font-weight: 900;
`;
export const muconAppBaseStyle = {
    Body : styled.div`
        min-height: 100vh;
    `,
    App: {
        Box: styled.div`
            margin: 0 auto;
        `,
        Header: {
            Header: styled.div`
                background-color: ${themeColor};
                color: #fff;
                padding: 15px;
                line-height: 30px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            `,
            LogoSection: styled.div`
                font-family: 'Montserrat', sans-serif;
                font-weight: 900;
                font-size: 30px;
                margin: 0 20px;
                &:hover {
                    text-shadow : 5px -1px 0 black;
                    transition: ease-in-out 0.3s;
                }
                &.atLoginPage {
                    color: ${themeColor};
                }
            `,
            NavAndSearchSection: styled.div`
                display: flex;

            `,
        },
        TitleBox: styled(Title)`
            margin: 30px 100px -25px 120px;
        `,
        BodyBox: styled.div`
            margin: 30px 100px;
            border: 1px solid ${themeColor};
            border-radius: 30px;
            min-height: ${BODY_HEIGHT};
            display: table;
            height: inherit;
            width: 100%;
        `
    }
};

export const navigationBar = {
    Box: styled.div`
        display: flex;
    `,
    Item: styled.div`
        font-weight: 900;
        color: #fff;
        padding: 0 8px;
        &.signinBox {
            border: 1px solid #fff;
            border-radius: 20px;
            margin-left: 20px;
            margin-right: -10px;
        }
    `
};
export const searchBar = {
    Box: styled.div`
        color: #fff;
        margin-right: 20px;
        width: 200px;
        height: 30px;
        border-bottom: 1px solid #fff;
        // & input:focus {
        //     border-bottom: 3px solid #fff;
        //     transition: ease-in-out 0.3s;
        // }
    `,
};
/* index.js */
export const BodySection = {
    HomeSection: styled.div`
        width: 50%;
    `
}
export const Top = {
    Section: styled.div`
        padding: 20px;
        width: 50%;
    `,
    Title: styled(Title)`
        font-size: 20px;
    `,
    Item: styled.div`
        margin-top: 20px;
    `
};

/* musical, concert page layout */
export const BodyLayout = {
    Wrap: styled.div`
        width: 100%;
    `,
    TopBar: styled.div`
        border-bottom: 1px solid ${themeColor};
        height: 50px;
        display: flex;
        align-items: center;
    `,
    MainSection: styled.div`
        min-height: 80vh;
        border-right: 1px solid ${themeColor};
        border-left: 1px solid ${themeColor};
        padding: 20px 20px;
        float: left;
        width: 70%;
    `,
    SideBar_left: styled.div`
        width: 15%;
        min-height: 80vh;
        float: left;
    `,
    SideBar_right: styled.div`
        width: 15%;
        min-height: 80vh;
        float: left;
    `,
};

export const TopBarSelectButton = {
    Wrap: styled.div`
        margin-left: 25px;
    `,
    Btn: styled.button`
        font-size: 15px;
        color: ${themeColor};
        opacity: 0.5;
        font-weight: 900;
        padding: 5px 10px;
        border: 1px solid transparent;
        &:hover {
            border: 1px solid ${themeColor};
            border-radius: 20px;
            opacity: 1;
        }
        &.selected {
            background-color: ${themeColor};
            color: #fff;
            border-radius: 20px;
            opacity: 1;
        }
    `
}
