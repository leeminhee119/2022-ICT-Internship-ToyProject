import type { NextPage } from 'next'
import Head from 'next/head'
import AppBase from '../ts-components/AppBase'
import { Thumbnail } from '../ts-components/Thumbnail'
import { Top } from '../ts-components/styled-components/style'
import { GetServerSideProps } from 'next'
import React from 'react'

interface HomeProps {
  data: any
}

const ComponentA = () => {
    return (<div>
        A
    </div>)
}

const ComponentB = () => {
    return (<div>
        B
    </div>)
}

const ComponentC = () => {
    return (<div>
        C
    </div>)
}

const ComponentD = () => {
    return (<div>
        D
    </div>)
}

const Home: NextPage<HomeProps> = ({data}:{data:any}) => {
  const cntTop = 20;
  const musicalRanking = new Array;
  const concertRanking = new Array;

  const componentNames = ['C','A', 'B', 'C', 'D', 'C'];
  var a = 5;

  /* musical, concert 데이터 분리 */

  let componentGroups1:any = [];
  componentNames.map((componentName, index) => {
      if(componentName == 'A') {
        componentGroups1.push(<ComponentA key={index}/>) 
        //리턴해도 되지만 설명을 위해 push
      }
      else if(componentName == 'B') {
        componentGroups1.push(<ComponentB key={index}/>)
          return <ComponentB key={index}/>
      }
      else if(componentName == 'C') {
        componentGroups1.push(<ComponentC key={index}/>)
          return <ComponentC key={index}/>
      }
      else if(componentName == 'D') {
        componentGroups1.push(<ComponentC key={index}/>)
          return <ComponentD key={index}/>
      }
  })

  //map은 배열로 리턴
  return (
    <>
    <Head>
      <title>뮤콘 : 뮤지컬 콘서트 200% 즐기기</title>
    </Head>
    {
        componentNames.map((componentName, index) => {
            if(componentName == 'A') {
                return <ComponentA key={index}/>
            }
            else if(componentName == 'B') {
                return <ComponentB key={index}/>
            }
            else if(componentName == 'C') {
                return <ComponentC key={index}/>
            }
            else if(componentName == 'D') {
                return <ComponentD key={index}/>
            }
        })
    }
    <hr/>
    {
        componentNames.map((componentName, index) => {
            return (
                <React.Fragment key={index}>
                {
                    componentName == 'A'?<ComponentA/>:null
                }
                {
                    componentName == 'B'?<ComponentB/>:null
                }
                {
                    componentName == 'C'?<ComponentC/>:null
                }
                {
                    componentName == 'D'?<ComponentD/>:null
                }
                </React.Fragment>
            )
        })
    }
    <hr/>
    {
        componentNames.map((componentName, index) => {
            return (
                <React.Fragment key={index}>
                {
                    componentName == 'A'?<ComponentA/>:
                    (
                        componentName == 'B'?<ComponentB/>:
                        (componentName == 'C'?<ComponentC/>:
                            (componentName == 'D'?<ComponentD/>:null)
                        )
                    )
                }
                </React.Fragment>
            )
        })
    }
    <hr/>
    {componentGroups1}
    </>
  )
}

export default Home
