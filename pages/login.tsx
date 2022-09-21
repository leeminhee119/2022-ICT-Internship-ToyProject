import React from "react";
import { ReactElement } from "react";
import { themeColor, subColor } from '../ts-components/commonVariables';
import {muconAppBaseStyle} from '../ts-components/styled-components/style';
import styled from "styled-components";
import Link from "next/link";


interface CarPoolInterface {
    children?: ReactElement[]|ReactElement
}

const CarPool = (props:CarPoolInterface) => {
    return (
        <Wrap>
        <LogoWrap>
        <muconAppBaseStyle.App.Header.LogoSection className="atLoginPage">
            <Link href="/">
            <a>MuCon</a>
            </Link>
        </muconAppBaseStyle.App.Header.LogoSection>
        </LogoWrap>
        <FormWrap>
            <TitleBox>로그인</TitleBox>
            <InputBox placeholder="아이디" type="text"></InputBox>
            <InputBox placeholder="비밀번호" type="password"></InputBox>
            <LoginBtn type='submit' value="확인" />
        </FormWrap>
        </Wrap>
    )
}
const Wrap = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const LogoWrap = styled.div`
    width: 400px;
    border: 1px solid ${themeColor};
    border-radius: 20px 20px 0 0;
    text-align: center;
    padding: 30px;
`;
const FormWrap = styled.div`
    background-color: ${themeColor};
    border-radius: 0 0 20px 20px;
    padding: 100px;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const TitleBox = styled.div`
    text-align: center;
    color: #fff;
    font-size: 30px;
    font-weight: 900;
    margin-bottom: 30px;
`;
const InputBox = styled.input`
    height: 35px;
    width: 200px;
    margin-bottom: 10px;
    border-radius: 10px;
    border: 1px solid ${subColor};
    background-color: #fff;
    padding: 10px;
`;
const LoginBtn = styled.input`
    margin-top: 30px;
    border: 1px solid #fff;
    color: #fff;
    padding: 10px 85px;
    border-radius: 20px;
    font-weight: 900;
`;

// fetch('/login', {
//     method: 'POST'
//     Headers: {
//         'Content-Type': "application/json"
//     },
//     body: JSON.stringify(request)
// })
export default CarPool;