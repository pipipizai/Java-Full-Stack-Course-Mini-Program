import {promisic} from "./util";
import {config} from "../config/config";

class Http{
    static async request({
                        url,
                        data,
                        method = 'GET'
                }) {
        const res = await promisic(wx.request)({
            url:`${config.apiBaseUrl}${url}`,
            data,
            method,
            header:{
                appkey:config.appkey
            }
        })
        return res.data
    }
}

export {
    Http
}