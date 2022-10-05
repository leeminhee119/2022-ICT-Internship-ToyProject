import type { NextApiRequest, NextApiResponse, NextPage } from 'next'
import React, {useState, useRef} from "react";
import { ReactElement } from "react";
import ThreeSectionTable from "../../ts-components/ThreeSectionTable";
import SelectProductType from '../../ts-components/SelectProductType';
import styled from 'styled-components';
import { GetServerSideProps } from 'next'
import { themeColor } from '../../ts-components/commonVariables';

import PostArticleEditor from '../../ts-components/PostArticleEditor'

interface HomeProps {
    children?: ReactElement[]|ReactElement
}

/* 후기 작성할 공연 고르기 위한 (select) 데이터 호출 */
export const getServerSideProps: GetServerSideProps = async (context) => {
 
    const res = await fetch(`http://localhost:3000/api/products`)
    const data = await res.json()
  
     if (!data) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
    
    return { props: { data: data } }
}

const InputTitle = {
    FormBox: styled.form`

    `,
    InputBox: styled.input`
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 5px;
        padding: 5px;
        margin-bottom: 10px;
    `,
}

const Home: NextPage<HomeProps> = ({data}:any) => {
    // 받아 온 데이터 musical, concert 기준으로 분리
    const musicalTitleArray: { title: string; id: number; }[] =[]
    const concertTitleArray: { title: string; id: number; }[] =[]
    for (let i=0; i<data.data.length; i++) {
        let current = data.data[i]
        if (current.type === 'musical') {
            musicalTitleArray.push({title: current.title, id:current.id})
        } else {
            concertTitleArray.push({title: current.title, id:current.id})
        }
    }

    //글 등록
    const [title, setTitle] = useState ('')
    const [htmlContent, setHtmlContent] = useState('')
    const getContent = (htmlContentProp: string) => {
        setHtmlContent(htmlContentProp);
    }
    const handleClickSubmit = (event: any) => {
        console.log(htmlContent)
        fetch('http://localhost:3000/api/reviews', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: 1,
                title: title,
                article: htmlContent
            })
        }).then(res => {
            if (res.status !== 200) {
                console.log('error!!') 
            } else {
                res.json().then(data => {
                    console.log(data)
                })
            }
        })
    }
    return (
        <ThreeSectionTable title="공연 후기를 작성해주세요!" data="" leftSection={<></>}>
            <InputTitle.FormBox>
                <SelectProductType musicalData={musicalTitleArray} concertData={concertTitleArray} />
                <InputTitle.InputBox placeholder='제목' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                <PostArticleEditor getContent={getContent}/>
                <SubmitBtn onClick={handleClickSubmit}> 등록 </SubmitBtn>
            </InputTitle.FormBox>
        </ThreeSectionTable>
    )
}

const SubmitBtn = styled.div`
    border: 2px solid ${themeColor};
    border-radius: 20px;
    color: ${themeColor};
    font-weight: 900;
    padding: 5px 15px;
    float: right;
`

export default Home;

