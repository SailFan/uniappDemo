"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      navs: [],
      active: 0,
      images: []
    };
  },
  onLoad() {
    this.getNav();
  },
  methods: {
    preview(index_iamge) {
      const urls = this.images.map((item) => {
        return item.img_url;
      });
      common_vendor.index.previewImage({
        urls,
        current: index_iamge
      });
    },
    leftClick(index, id) {
      this.active = index;
      common_vendor.index.request({
        url: "/data/image.json",
        success: (res) => {
          if (res.data.code !== 1) {
            return common_vendor.index.showToast({
              title: "\u83B7\u53D6\u6570\u636E\u5931\u8D25"
            });
          }
          this.images = res.data.message;
          console.log(this.images);
        }
      });
    },
    getNav() {
      common_vendor.index.request({
        url: "/data/type.json",
        success: (res) => {
          if (res.data.code !== 1) {
            return common_vendor.index.showToast({
              title: "\u83B7\u53D6\u6570\u636E\u5931\u8D25"
            });
          }
          this.navs = res.data.message;
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.navs, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.n($data.active === index ? "active" : ""),
        c: item.id,
        d: common_vendor.o(($event) => $options.leftClick(index, item.id), item.id)
      };
    }),
    b: common_vendor.f($data.images, (item, k0, i0) => {
      return {
        a: common_vendor.o(($event) => $options.preview(item.img_url), item.id),
        b: item.img_url,
        c: common_vendor.t(item.title),
        d: item.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yz/Documents/HBuilderProjects/uniappDemo/pages/picture/picture.vue"]]);
wx.createPage(MiniProgramPage);
