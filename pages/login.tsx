import React from "react";
import { ReactElement } from "react";
import { themeColor, subColor } from '../ts-components/commonVariables';
import {muconAppBaseStyle} from '../ts-components/styled-components/style';
import styled from "styled-components";
import Link from "next/link";
import set_cookie from '../cookie_test/cookie';
import { useCookies } from 'react-cookie'
import { GetServerSideProps } from 'next'
import axios from 'axios';
// export async function getServerSideProps(context: { req: { headers: { cookie: any; }; }; }) {
//     const cookies = context.req.headers.cookie;
//     return {
//         props: {data:cookies},
//     }
// }

const setCookie = (name:string, value:string) => {
    var date = new Date();
    date.setTime(date.getTime()+3903333333324);
    document.cookie = encodeURIComponent(name)+'='+encodeURIComponent(value)
        +';expires='+date.toUTCString()
        +';path=/';
}
const sendCookieToApi = () => {
    // const cookies = document.cookie.split(`; `).map((el) => el.split('='));
    
    axios.post('./api/temp/login-check', document.cookie)
}
interface LoginPageInterface {
    children?: ReactElement[]|ReactElement
}
const LoginPage = (props:LoginPageInterface) => {
    sendCookieToApi();
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
            <LoginBtn type='submit' value="확인" onClick={()=>setCookie('userID', 'mhl98')}/>
            <JoinLink href="#">회원가입</JoinLink>
            {/* {
                (data.parts == null)?
                <div>회원정보가 없습니다</div>
                :<div>{data.parts[0]}님 반갑습니다.</div>
            } */}
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
const JoinLink = styled.a`
    color: #fff;
    font-size: 12px;
    font-weight: 100;
    margin-top: 20px;
    margin-bottom: -15px;
    border-bottom: 1px solid #fff;
`

export default LoginPage;