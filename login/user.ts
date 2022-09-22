interface loadUserAPIInterface {
    userID: string, 
}
const axios = require('axios');
function loadUserAPI(props: loadUserAPIInterface) {
    // 서버에 요청 보내기
    return axios.get(props.userID ? `/user/${props.userID}` : '/user/', {
        withCredentials: true,
    })
}