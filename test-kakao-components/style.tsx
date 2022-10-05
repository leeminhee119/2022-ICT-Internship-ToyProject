import styled from "styled-components";

/* common variables */
const color_lightgrey = 'rgba(0,0,0,0.4)'

export const Poster  = {
    Item: styled.div`
        width: 130px;
        height: 170px;
        margin: 0 10px 60px 0;
        display: inline-block;
        vertical-align: top;
    `,
    ItemImg: styled.div`
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
    ItemInfo: styled.div`
        color: ${color_lightgrey}
        margin-top: 5px;
        display: block;
        font-size: 10px;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2; // 원하는 라인수
        -webkit-box-orient: vertical
    `,
}