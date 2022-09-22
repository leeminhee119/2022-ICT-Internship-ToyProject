import styled from "styled-components";
import { Thumbnail, CircleThumbnail } from '../ts-components/Thumbnail'
import { themeColor } from "./commonVariables";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'

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
                        const historyLength = Object.values(artist.history).length
                        return (
                            <>
                            <tr style={{display: 'flex', alignItems: 'center'}}>
                                <TableDataArtist>
                                    <CircleThumbnail key={index}
                                    name={artist.name}
                                    thumbnailUrl={artist.thumbnailUrl} />
                                </TableDataArtist>
                                <TableDataProducts>
                                    <Swiper
                                    spaceBetween={0}
                                    slidesPerView={(historyLength < 6)?historyLength:6.5}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    style={{margin: '0 30px'}}
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
                                </TableDataProducts>
                            </tr>
                            <tr style={{
                                height: '15px',
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
    display: flex;
    justify-content: center;
`;
const TableDataProducts = styled.td`
    display: flex;
    overflow: hidden;
`;

export default MainSectionTable