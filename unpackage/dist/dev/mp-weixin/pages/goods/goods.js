"use strict";
const common_vendor = require("../../common/vendor.js");
const goods_list = () => "../../component/goods_list/goods_list2.js";
const _sfc_main = {
  components: { "goods_list": goods_list },
  data() {
    return {
      goods: [],
      flag: true
    };
  },
  onReachBottom() {
    console.log("\u89E6\u5E95\u4E86");
  },
  onPullDownRefresh() {
    common_vendor.index.stopPullDownRefresh();
  },
  onLoad() {
    this.getHotGoods();
  },
  methods: {
    getHotGoods() {
      common_vendor.index.request({
        url: "/data/hot.json",
        success: (res) => {
          if (res.data.code !== 1) {
            return common_vendor.index.showToast({
              title: "\u83B7\u53D6\u6570\u636E\u5931\u8D25"
            });
          }
          this.goods = res.data.data.product_list;
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
  return common_vendor.e({
    a: common_vendor.p({
      goods: $data.goods
    }),
    b: $data.flag
  }, $data.flag ? {} : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yz/Documents/HBuilderProjects/uniappDemo/pages/goods/goods.vue"]]);
wx.createPage(MiniProgramPage);
