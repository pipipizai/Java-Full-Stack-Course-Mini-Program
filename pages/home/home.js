// pages/home.js

import {config} from "../../config/config";
import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {Category} from "../../model/category";
import {Activity} from "../../model/activity";
import {Latest} from "../../model/latest-me";
import {Paging} from "../../utils/paging";
import {SpuPaging} from "../../model/spu-paging";

Page({

    /**
     * Page initial data
     */
    data: {
        themeA: null,
        themeE: null,
        bannerB: null,
        grid: [],
        activityD: null,
        latestItems: []

    },

    /**
     * Lifecycle function--Called when page load
     */
    async onLoad(options) {
        this.initAllData()
        this.initBottomSpuList()


        // wx.lin.renderWaterFlow(this.data.latestItems, false ,()=>{
        //     console.log('渲染成功')
        // })
    },

    async initBottomSpuList() {
        const paging = await SpuPaging.getLatestPaging()
        const data = await paging.getMoreData()
        if (!data) {
            return
        }
    },

    async initAllData() {

        const theme = new Theme()
        await theme.getThemes()

        const themeA = theme.getHomeLocationA()
        const themeE = theme.getHomeLocationE()
        let themeESpu = []
        if (themeE.online) {
            const data = await Theme.getHomeLocationESpu()
            if (data) {
                themeESpu = data.spu_list.slice(0, 8)
            }
        }

        const themeF = theme.getHomeLocationF()

        const bannerB = await Banner.getHomeLocationB()
        const grid = await Category.getHomeLocationC()
        const activityD = await Activity.getHomeLocationD()

        const bannerG = await Banner.getHomeLocationG()
        const themeH = theme.getHomeLocationH()

        this.initBottomSpuList()
        // const latestInfo = await Latest.getLatest()
        //
        // let latestItems = []
        // latestItems = latestInfo.items

        this.setData({
            themeA,
            bannerB,
            grid,
            activityD,
            themeE,
            themeESpu,
            themeF,
            bannerG,
            themeH,
            // latestItems
        })

    },


    /**
     * Page event handler function--Called when user drop down
     */
    onPullDownRefresh: function () {

    },

    /**
     * Called when page reach bottom
     */
    onReachBottom: function () {

    },

    /**
     * Called when user click on the top right corner to share
     */
    onShareAppMessage: function () {

    }
})
