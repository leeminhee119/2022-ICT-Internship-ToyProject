import styled from "styled-components";

/* common variables */
const color_lightgrey = 'rgba(0,0,0,0.4)'

export const ComponentBox = styled.div`
    margin-bottom: -40px;
`

export const Thumbnail  = {
    Item: styled.div`
        margin: 3px 3px 30px 3px;
        display: inline-block;
        vertical-align: top;
    `,
    ItemImg: styled.div`
        position: relative;
        overflow: hidden;
        border-radius: 3px;
        img:nth-child(1) {
            object-fit: cover;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
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
    ItemTitle: styled.div`
        width: 100%;
        margin-top: 3px;
        font-size: 13px;
    `,
    ItemInfo: styled.div`
        color: ${color_lightgrey}
        margin-top: 5px;
        display: block;
        font-size: 10px;
        font-weight: 100;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1; // 원하는 라인수
        -webkit-box-orient: vertical
    `,
}
export const Poster = {
    //Item > ItemImg, ItemTitle, ItemInfo
    Item: styled(Thumbnail.Item)`
        width: 133px;
    `,
    ItemImg: styled(Thumbnail.ItemImg)`
        height: 180px;
    `,
    ItemTitle: styled(Thumbnail.ItemTitle)`
    `,
    ItemInfo: styled(Thumbnail.ItemInfo)`
    `,
}
export const PosterHorizontal = {
    Item: styled(Thumbnail.Item)`
        display: flex;
        margin-bottom: 8px;
    `,
    ItemImg: styled(Thumbnail.ItemImg)`
        width: 75px;
        height: 100px;
    `,
    InfoSection: styled.div`
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `,
    ItemRank: styled.div`
        font-size: 18px;
        font-weight: 900;
    `,
    ItemTitle: styled(Thumbnail.ItemTitle)`
    `,
    ItemInfo: styled(Thumbnail.ItemInfo)`
    `,
}
export const Card = {
    //Item > ItemImg, ItemTitle, ItemInfo
    Item : styled(Thumbnail.Item)`
    `,
    ItemImg: styled(Thumbnail.ItemImg)`
        width: 148px;
        height: 290px;
        img:nth-child(2) {
            object-fit: cover;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 40%;
            margin-bottom: 20px;
        }
    `,
    TitleImg: styled(Thumbnail.ItemTitle)`
        
    `,
    // ItemInfo: styled(Thumbnail.ItemInfo)`
    // `,
}