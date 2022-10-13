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
        img.thumbnail {
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
        img.title {
            object-fit: cover;
            width: 100%;
            height: 40%;
            margin-top: 135px;
            z-index: 100;
            position: relative;
        }
    `,
    TitleImg: styled(Thumbnail.ItemTitle)`
    `,
}
const topBanner_margin_left= '25px'
export const TopBanner = {
    ItemImg: styled(Thumbnail.ItemImg)`
        >:not(img.thumbnail) {
            margin-left: ${topBanner_margin_left};
        }
        * {
            z-index: 100;
            position: relative;
        }
        height: 400px;
        border-radius: 0;
        img {
            margin-right: 5px !important;
        }
        img.title {
            object-fit: cover;
            width: 200px;
            margin-top: 220px !important;
        }
        div.banner_caption {
            font-size: 12px;
            font-weight: 100;
            color: #fff;
            margin-bottom: 5px;
        }

    `,
    ItemInfo: styled.div`
        display: flex;
        div.banner_subinfo {
            font-size: 12px;
            font-weight: 100;
            color: #fff;
            display: inline-block;
            vertical-align: top;
        }
    `,
    ItemCaption: styled.div`
        font-size: 30px;
        color: #fff;
    `
}

export const ADBanner = styled.div`
    background-color: #888;
    height: 60px;
    border-radius: 5px;
`

export const StrategyBtns = {
    BtnBox: styled.div`
        background-color: #888;
        border-radius: 5px;
        height: 45px;
        display: flex;
    `,
    Btn: styled.button`
        color: #fff;
        font-size: 13px;
        font-weight: 100;
        text-align: center;
        width: 33.3%;
    `
}

export const BadgeStyle = {
    margin: '5px',
    opacity: '90%',
    zIndex: '100',
    position: 'relative',
    display: 'flex',
    gap: '2px'
}