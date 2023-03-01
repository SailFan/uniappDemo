"use strict";
const common_vendor = require("./common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {},
  props: ["goods"]
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.goods, (item, k0, i0) => {
      return {
        a: item.imageUrl,
        b: common_vendor.t(item.sell_price),
        c: common_vendor.t(item.stock_quantity),
        d: common_vendor.t(item.title),
        e: item.id
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yz/Documents/HBuilderProjects/uniappDemo/component/goods_list/goods_list.vue"]]);
exports.Component = Component;
