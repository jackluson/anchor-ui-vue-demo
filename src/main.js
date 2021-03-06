import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import AnchorUI from "anchor-ui-vue";

import App from "./App.vue";

Vue.use(ElementUI);
Vue.use(AnchorUI);
console.log("AnchorUI", AnchorUI);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
