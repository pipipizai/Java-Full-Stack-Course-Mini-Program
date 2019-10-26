// pages/home.js

import {config} from "../../config/config";
import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {Category} from "../../model/category";
import {Activity} from "../../model/activity";

Page({

    /**
     * Page initial data
     */
    data: {
        themeA: null,
        themeE: null,
        bannerB: null,
        grid: [],
        activityD: null

    },

    /**
     * Lifecycle function--Called when page load
     */
    async onLoad(options) {
        this.initAllData()
    },

    async initAllData() {

        const theme = new Theme()
        await theme.getThemes()

        const themeA = await theme.getHomeLocationA()
        const themeE = await theme.getHomeLocationE()
        let themeESpu = []
        if (themeE.online) {
            const data = await Theme.getHomeLocationESpu()
            if(data){
                themeESpu = data.spu_list.slice(0,8)
            }
        }


        const bannerB = await Banner.getHomeLocationB()
        const grid = await Category.getHomeLocationC()
        const activityD = await Activity.getHomeLocationD()
        this.setData({
            themeA,
            themeE,
            themeESpu,
            bannerB,
            grid,
            activityD
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