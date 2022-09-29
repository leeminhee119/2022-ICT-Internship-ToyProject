import styled from "styled-components";
import { Thumbnail, CircleThumbnail } from '../ts-components/Thumbnail'
import { themeColor } from "./commonVariables";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { Key } from "react";

interface MainSectionTableInterface {
    artistsData: any[],
}
const MainSectionTable = (props:MainSectionTableInterface) => {
    const dataArray = props.artistsData //[{id:1,...,products:[{title:'movie'}]}, {}, {}]
    console.log(dataArray)
    return (
        <Table>
            <tbody>
                {
                    dataArray.map((artist, index) => {
                        const historyLength = artist.Products.length
                        return (
                            <>
                            <tr style={{display: 'flex', alignItems: 'center'}}>
                                <TableDataArtist>
                                    <CircleThumbnail key={index}
                                    name={artist.name}
                                    thumbnailUrl={artist.thumbnail_url} />
                                </TableDataArtist>
                                <TableDataProducts>
                                    <Swiper
                                    spaceBetween={0}
                                    slidesPerView={(historyLength <= 6)?historyLength:6.5}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    style={{margin: '0 30px'}}
                                    >
                                    {
                                        artist.Products.map((prd:any, index: Key | null | undefined) => {
                                            return(
                                                <SwiperSlide style={{display: 'inline-block'}}>
                                                    <Thumbnail key={index}
                                                    title={prd.title}
                                                    thumbnailUrl={prd.thumbnail_url}
                                                    reservationHref={prd.reservation_url}
                                                    reviewsUrl={'/post/'+prd.id.toString()} />
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