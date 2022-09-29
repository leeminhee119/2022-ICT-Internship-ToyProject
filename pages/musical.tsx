import React, { useState } from "react";
import { ReactElement } from "react";

import { GetServerSideProps } from 'next'
import FourSectionTable from "../ts-components/FourSectionTable";


interface MusicalInterface {
    children?: ReactElement[]|ReactElement,
}
const Musical = ({data}:any, props:MusicalInterface) => {
    return (
        <FourSectionTable typeMuCon="musical"
        data={data.data} />
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/a_p_musical`)
  const artist = await res.json()

  if (!artist) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return { props: { data: artist } }
}

export default Musical;