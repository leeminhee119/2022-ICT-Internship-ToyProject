import styled from "styled-components";
import { Thumbnail, CircleThumbnail } from '../ts-components/Thumbnail'
import { subColor, themeColor } from "./commonVariables";



interface MainSectionTableInterface {
    artistsData: any[],
}
const MainSectionTable = (props:MainSectionTableInterface) => {
    const dataArray = props.artistsData
    return (
        <Table>
            <tbody>
                {
                    Object.values(dataArray).map((artist, index) => {
                        return (
                            <>
                            <tr>
                                <TableArtistItem>
                                    <CircleThumbnail key={index}
                                    name={artist.name}
                                    thumbnailUrl={artist.thumbnailUrl} />
                                </TableArtistItem>
                                <td>
                                <TablePrdItem>
                                    {
                                        Object.values(artist.history).map((prd, index) => {
                                            return(
                                                <div>
                                                    <Thumbnail key={index}
                                                    title={prd.title}
                                                    thumbnailUrl={prd.thumbnailUrl}
                                                    reservationHref={prd.reservationHref} />
                                                </div>
                                            )
                                        })
                                    }
                                </TablePrdItem>
                                </td>
                            </tr>
                            <tr style={{
                                height: '50px',
                                borderBottom: `1px solid ${themeColor}`
                            }}></tr>
                            </>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}

const Table = styled.table`
    table-layout:fixed;
    width:100%;
`;
const TableArtistItem = styled.td`
    width: 15%;
`
const TablePrdItem = styled.div`
    display: flex;
    overflow-x: scroll;
    ::-webkit-scrollbar {
        height: 6px;
        width: 4px;
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 10px;
      }
    ::-webkit-scrollbar-thumb {
        height: 6px;
        width: 4px;
        border-radius: 10px;
        background-color: ${themeColor}
    }
`

export default MainSectionTable