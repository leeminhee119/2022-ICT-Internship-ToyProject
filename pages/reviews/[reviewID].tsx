import AppBase from '../../ts-components/AppBase'
import ThreeSectionTable from '../../ts-components/ThreeSectionTable'
import { getAllPostIds, getPostData } from '.';

/* fetch data necessary for params.id */
export async function getStaticProps({ params }:any) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

/* return possible value for [id] */
export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    }
}

export default function Post() {
  return (
        <ThreeSectionTable title="" data={''}></ThreeSectionTable>
  )
}