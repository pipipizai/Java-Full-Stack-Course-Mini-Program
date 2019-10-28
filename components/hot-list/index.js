// components/hot-list/index.js
Component({
    /**
     * Component properties
     */
    properties: {
        banner: Object
    },

    observers: {
        'banner': function (banner) {
            if (!banner) {
                return
            }
            if (banner.items.length === 0) {
                return
            }
            const left = banner.items.find(i => i.name === 'left')
            const rightTop = banner.items.find(i => i.name === 'right-top')
            const rightBottom = banner.items.find(i => i.name === 'right-bottom')
            this.setData({
                left,
                rightTop,
                rightBottom
            })
        }
    },

    /**
     * Component initial data
     */
    data: {},

    /**
     * Component methods
     */
    methods: {}
})
