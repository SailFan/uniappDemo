"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      swipers: []
    };
  },
  onLoad() {
    this.getSwipers();
  },
  methods: {
    getSwipers() {
      common_vendor.index.request({
        url: "/data/banner.json",
        success(res) {
          if (res.data.code !== 1) {
            return common_vendor.index.showToast({
              title: "\u83B7\u53D6\u6570\u636E\u5931\u8D25"
            });
          }
          this.swipers = res.data.data.mainPositionList;
          console.log(this.swipers);
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.swipers, (item, k0, i0) => {
      return {
        a: item.imgUrl,
        b: item.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yz/Documents/HBuilderProjects/uniappDemo/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
