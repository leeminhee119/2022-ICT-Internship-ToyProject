
const convertViewCount = (cnt:number) => {
    let convertedCnt = '';
    if (cnt >= 100000000) {
        cnt = cnt / 100000000;
        convertedCnt = cnt.toLocaleString('ko-KR', {maximumFractionDigits: 1}) + "억"
    }
    if (cnt >= 10000) {
        cnt = cnt / 10000
        convertedCnt = cnt.toLocaleString('ko-KR', {maximumFractionDigits: 1}) + "만"
    }
    else convertedCnt = cnt.toString()
    return convertedCnt
}
export default convertViewCount