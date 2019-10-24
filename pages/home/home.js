// pages/home.js

import {config} from "../../config/config";
import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {Category} from "../../model/category";

Page({

    /**
     * Page initial data
     */
    data: {
        themeA: null,
        bannerB: null,
        grid: []
    },

    /**
     * Lifecycle function--Called when page load
     */
    async onLoad(options) {
        this.initAllData()
    },

    async initAllData() {
        const themeA = await Theme.getHomeLocationA()
        const bannerB = await Banner.getHomeLocationB()
        const grid = await Category.getGridCategory()
        this.setData({
            themeA: themeA[0],
            bannerB,
            grid
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