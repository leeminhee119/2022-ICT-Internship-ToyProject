import React from "react";
import { ReactElement } from "react";
import AppBase from '../../ts-components/AppBase';
import ThreeSectionTable from "../../ts-components/ThreeSectionTable";
import type { NextPage } from 'next'
// import fs from 'fs';
// import path from "path";
// import matter from "gray-matter";

// export function getAllPostIds() {
//     const fileNames = fs.readdirSync('reviews');
  
//     // Returns an array that looks like this:
//     // [
//     //   {
//     //     params: {
//     //       id: 'ssg-ssr'
//     //     }
//     //   },
//     //   {
//     //     params: {
//     //       id: 'pre-rendering'
//     //     }
//     //   }
//     // ]
//     return fileNames.map((fileName) => {
//       return {
//         params: {
//           id: fileName.replace(/\.md$/, ''),
//         },
//       };
//     });
// }
// export function getPostData(id:any) {
//     const fullPath = path.join('reviews', `${id}.md`);
//     const fileContents = fs.readFileSync(fullPath, 'utf8');
  
//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents);
  
//     // Combine the data with the id
//     return {
//       id,
//       ...matterResult.data,
//     };
// }
interface HomeProps {
    children?: ReactElement[]|ReactElement
}

const Home: NextPage<HomeProps> = () => {
    return (
        <ThreeSectionTable title="공연 후기" data=""></ThreeSectionTable>
    )
}

export default Home;