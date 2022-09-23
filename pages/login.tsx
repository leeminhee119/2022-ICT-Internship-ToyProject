import React, { useState } from "react";
import { ReactElement } from "react";
import { themeColor, subColor } from '../ts-components/commonVariables';
import {muconAppBaseStyle} from '../ts-components/styled-components/style';
import styled from "styled-components";
import Link from "next/link";
import set_cookie from '../cookie_test/cookie';
import { useCookies } from 'react-cookie'
import { GetServerSideProps } from 'next'
import axios from 'axios';
// export async function getServerSideProps() {
//     const res = await fetch(`http://localhost:3000/api/login-check`)
//     const {data} = await res.json()

//     if (!data) {
//       return {
//         redirect: {
//           destination: '/',
//           permanent: false,
//         },
//       }
//     }
//     return { props: { data: data } }
// }

const setCookie = (user:any) => {
    var date = new Date();
    date.setTime(date.getTime()+3903333333324);
    document.cookie = encodeURIComponent(user.userID)+'='+encodeURIComponent(user.userPW)
        +';expires='+date.toUTCString()
        +';path=/';
}
interface LoginPageInterface {
    children?: ReactElement[]|ReactElement
}
const LoginPage = (props:LoginPageInterface) => {
    // sendCookieToApi(); 쿠키는 만들면 자동으로 서버에 전송한다.
    const [userAccount, setUserAccount] = useState({
        userID: '',
        userPW: ''
    });
    const onChangeAccount= (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserAccount({
            ...userAccount,
            [e.target.name]: e.target.value,
        })
    }
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
            <InputBox placeholder="아이디" type="text" onChange={onChangeAccount}></InputBox>
            <InputBox placeholder="비밀번호" type="password" onChange={onChangeAccount}></InputBox>
            <LoginBtn type='submit' value="확인" onClick={()=>{
                setCookie(userAccount);
                axios.post('./api/temp/login').then((Response) => {
                    if(Response.data.data.isLogin == true) {
                        alert('로그인 되어있음')
                    } else {
                        alert('로그인 해주세요.')
                    }
                })
            }}/>
            <JoinLink href="#">회원가입</JoinLink>
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