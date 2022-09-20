import React from "react";
import styled from "styled-components";
import { themeColor } from "./commonVariables";

const ThumbnailBox = { // Item > ImgBox + ItemBox
    Item: styled.div`
        width: 130px;
        height: 170px;
        margin: 0 10px 60px 0;
        display: inline-block;
        vertical-align: top;
    `,
    ImgBox: styled.div`
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            object-fit: cover;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
        &:hover {
            img {
                opacity: 40%;
                z-index: -1;
            }
        }
        &.nonHover {
            &:hover {
                img {
                    opacity: 1;
                }
            }
        }
        div.default-img {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background-color: #ddd;
            background-image: url('https://image.webtoonguide.com/cocoda/COCODA_128x128.png');
            background-repeat: no-repeat;
            background-size: 38%;
            background-position: center;
        }
    `,
    InfoBox: styled.strong`
        margin-top: 5px;
        display: block;
        font-size: 13px;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2; // 원하는 라인수
        -webkit-box-orient: vertical
    `
}
const ThumbnailBtn = {
    BtnBox: styled.div`
        display: flex;
        gap: 5px;
    `,
    Btn: styled.a`
        padding: 5px;
        border: 2px solid ${themeColor};
        border-radius: 20px;
        font-size: 12px;
        font-weight: bold;
        background-color: #fff;
        &.disable {
            background-color: grey;
            color: rgba(0,0,0,0.5);
        }
    `,
}
const CircleThumbnailBox = {
    Item: styled.div`
        width: 100px;
        height: 120px;
        margin: 0 20px 20px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    `,
    ImgBox: styled(ThumbnailBox.ImgBox)`
        border-radius: 50%;
    `,
    InfoBox: styled(ThumbnailBox.InfoBox)`
    `,
}
interface ThumbnailInterface {
    thumbnailUrl?: string,
    title: string,
    carpoolUrl?: string,
    reviewsUrl?: string,
    reservationHref?: string,
}
export const Thumbnail = (props: ThumbnailInterface) => {
    if (props.thumbnailUrl == null || props.thumbnailUrl == '') {
        return (
            <ThumbnailBox.ImgBox>
                <div className="default-img"/>
            </ThumbnailBox.ImgBox>
        )
    }
    return (
        <>
        <ThumbnailBox.Item>
            <ThumbnailBox.ImgBox>
                <img src={props.thumbnailUrl} />
                <ThumbnailBtn.BtnBox>
                {
                    props.reservationHref == null || props.reservationHref == ''?
                    <ThumbnailBtn.Btn className='disable'>예매</ThumbnailBtn.Btn>
                    :<ThumbnailBtn.Btn href={props.reservationHref}>예매</ThumbnailBtn.Btn>
                }
                {
                    props.reservationHref == null || props.reservationHref == ''?
                    <ThumbnailBtn.Btn className="disable">동행</ThumbnailBtn.Btn>
                    :<ThumbnailBtn.Btn href={props.carpoolUrl}>동행</ThumbnailBtn.Btn>
                }
                <ThumbnailBtn.Btn href={props.reviewsUrl}>후기</ThumbnailBtn.Btn>
                </ThumbnailBtn.BtnBox>
            </ThumbnailBox.ImgBox>
            <ThumbnailBox.InfoBox>
                {props.title}
            </ThumbnailBox.InfoBox>
        </ThumbnailBox.Item>

        </>
    )
}
interface CircleThumbnailInterface {
    thumbnailUrl?: string,
    name: string,
}
export const CircleThumbnail = (props:CircleThumbnailInterface) => {
    return (
        <CircleThumbnailBox.Item>
            <CircleThumbnailBox.ImgBox className="nonHover">
                <img src={props.thumbnailUrl} />
            </CircleThumbnailBox.ImgBox>
            <CircleThumbnailBox.InfoBox>
                {props.name}
            </CircleThumbnailBox.InfoBox>
        </CircleThumbnailBox.Item>
    )
}
