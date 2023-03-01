"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      scale: 10,
      longitude: 116.326575,
      latitude: 39.922213,
      covers: [
        {
          longitude: 116.326575,
          latitude: 39.922213,
          iconPath: "../../static/product/2.png",
          width: 30,
          height: 30
        }
      ]
    };
  },
  methods: {
    phone() {
      common_vendor.index.makePhoneCall({
        phoneNumber: "17600576201"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.phone && $options.phone(...args)),
    b: $data.longitude,
    c: $data.latitude,
    d: $data.scale,
    e: $data.covers
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yz/Documents/HBuilderProjects/uniappDemo/pages/contact/contact.vue"]]);
wx.createPage(MiniProgramPage);
