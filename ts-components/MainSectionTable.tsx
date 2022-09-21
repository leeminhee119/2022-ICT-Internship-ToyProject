import styled from "styled-components";
import { Thumbnail, CircleThumbnail } from '../ts-components/Thumbnail'
import { subColor, themeColor } from "./commonVariables";
import { Swiper, SwiperSlide } from 'swiper/react';

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
                                <TableDataArtist>
                                    <CircleThumbnail key={index}
                                    name={artist.name}
                                    thumbnailUrl={artist.thumbnailUrl} />
                                </TableDataArtist>
                                {/* <TableDataProducts> */}
                                    <Swiper
                                    spaceBetween={30}
                                    slidesPerView={"auto"}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    >
                                    {
                                        Object.values(artist.history).map((prd, index) => {
                                            return(
                                                <SwiperSlide style={{display: 'inline-block'}}>
                                                    <Thumbnail key={index}
                                                    title={prd.title}
                                                    thumbnailUrl={prd.thumbnailUrl}
                                                    reservationHref={prd.reservationHref} />
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                    </Swiper>
                                {/* <TablePrdItem>
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
                                </TablePrdItem> */}
                                {/* </TableDataProducts> */}
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
const TableDataArtist = styled.td`
    width: 15%;
`;
const TableDataProducts = styled.td`
    height: 100px;
    width: 85%;
    display: flex;
    overflow: hidden;
`;
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