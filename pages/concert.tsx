import React, { useState } from "react";
import { ReactElement } from "react";
import AppBase from '../ts-components/AppBase';
import { BodyLayout, TopBarSelectButton, } from "../ts-components/styled-components/style";
import { Thumbnail, CircleThumbnail } from '../ts-components/Thumbnail'
import { GetServerSideProps } from 'next'
import MainSectionTable from "../ts-components/MainSectionTable";
import FourSectionTable from "../ts-components/FourSectionTable";


interface ConcertInterface {
    children?: ReactElement[]|ReactElement
}

const Concert = ({data}:any, props:ConcertInterface) => {
    return (
        <FourSectionTable typeMuCon="concert"
        data={data.data} />
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
 
    const res = await fetch(`http://localhost:3000/api/a_p_concert`)
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

export default Concert;