"use strict";
const common_vendor = require("../../common/vendor.js");
const goods_list = () => "../../component/goods_list/goods_list2.js";
const _sfc_main = {
  data() {
    return {
      swiperList: [],
      goods: [],
      navs: [
        {
          "icon": "iconfont icon-chaoshi",
          "title": "\u8D85\u5E02",
          "path": "/pages/goods/goods"
        },
        {
          "icon": "iconfont icon-shipin_o",
          "title": "\u89C6\u9891",
          "path": "/goods"
        },
        {
          "icon": "iconfont icon-shequ",
          "title": "\u5173\u4E8E\u6211\u4EEC",
          "path": "/pages/contact/contact"
        },
        {
          "icon": "iconfont icon-guanyuwomen",
          "title": "\u793E\u533A",
          "path": "/pages/picture/picture"
        }
      ]
    };
  },
  onLoad() {
    this.getSwipers();
    this.getHotGoods();
  },
  components: { "goods_list": goods_list },
  methods: {
    navList(url) {
      common_vendor.index.navigateTo({
        url
      });
    },
    getSwipers() {
      common_vendor.index.request({
        url: "/data/banner.json",
        success: (res) => {
          if (res.data.code !== 1) {
            return common_vendor.index.showToast({
              title: "\u83B7\u53D6\u6570\u636E\u5931\u8D25"
            });
          }
          this.swiperList = res.data.data.mainPositionList;
        }
      });
    },
    getHotGoods() {
      common_vendor.index.request({
        url: "/data/goods.json",
        success: (res) => {
          if (res.data.code !== 1) {
            return common_vendor.index.showToast({
              title: "\u83B7\u53D6\u6570\u636E\u5931\u8D25"
            });
          }
          this.goods = res.data.data.product_list;
          console.log(this.goods);
        }
      });
    }
  }
};
if (!Array) {
  const _component_goods_list = common_vendor.resolveComponent("goods_list");
  _component_goods_list();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.swiperList, (item, k0, i0) => {
      return {
        a: item.imgUrl,
        b: item.id
      };
    }),
    b: common_vendor.f($data.navs, (item, index, i0) => {
      return {
        a: common_vendor.n(item.icon),
        b: common_vendor.t(item.title),
        c: item.index,
        d: common_vendor.o(($event) => $options.navList(item.path), item.index)
      };
    }),
    c: common_vendor.p({
      goods: $data.goods
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yz/Documents/HBuilderProjects/uniappDemo/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
