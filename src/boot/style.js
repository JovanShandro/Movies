// import something here
import Vue from 'vue'

// "async" is optional
export default ({ /* app, router, Vue, ... */ }) => {
  // something to do
  Vue.component('v-style', {
    render: function (createElement) {
        return createElement('style', this.$slots.default);
    }
  });
}
