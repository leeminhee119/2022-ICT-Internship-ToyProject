import { BodyLayout, TopBarSelectButton, } from "../ts-components/styled-components/style";
import styled from "styled-components";

interface MainSectionTableInterface {
    artistAndPrds: any[],
}
const MainSectionTable = (props:MainSectionTableInterface) => {
    return (
        <table>
            <tbody>
            {
                (props.artistAndPrds).map((artist, index) => {
                    return (
                        <tr>
                            <td></td> {/*배우[이름,이미지소스]*/}
                            <td></td> {/*작품[제목,이미지소스]*/}
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}

const Table = styled.table`
`;
export default MainSectionTable