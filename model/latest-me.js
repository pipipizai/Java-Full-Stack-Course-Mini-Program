import {Http} from "../utils/http";

class Latest{
    static async getLatest(){
        return await Http.request({
            url:`spu/latest`
        })
    }
}

export {
    Latest
}