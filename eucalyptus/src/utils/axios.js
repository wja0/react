import axios from "axios";

const DOMAIN = "http://39.127.132.78:8080";
axios.defaults.withCredentials = true; //쿠키 데이터 전송
export const request = (method, url, data) =>{
    return axios({
        method,
        url : DOMAIN + url,
        data,
    }).then((res) => res.data)
    .catch((err)=>console.log(err))
}
