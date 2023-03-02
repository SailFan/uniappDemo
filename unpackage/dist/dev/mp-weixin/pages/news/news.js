"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      list: []
    };
  },
  onLoad() {
    this.getdetails();
  },
  methods: {
    getdetails() {
      common_vendor.index.request({
        url: "/data/details.json",
        success: (res) => {
          if (res.data.code !== 1) {
            return common_vendor.index.showToast({
              title: "\u83B7\u53D6\u6570\u636E\u5931\u8D25"
            });
          }
          this.list = res.data.message;
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, k0, i0) => {
      return {
        a: item.image_url,
        b: common_vendor.t(item.title),
        c: item.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yz/Documents/HBuilderProjects/uniappDemo/pages/news/news.vue"]]);
wx.createPage(MiniProgramPage);
