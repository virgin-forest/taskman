// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入element-ui组件库
// import el from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

//引入了iviewui组件库
import iview from 'iview'
import 'iview/dist/styles/iview.css'

import jsSha512 from 'js-sha512'

// import jsMD5 from 'js-md5'

//按需求引入
// import { Button, Table } from 'iview';
// Vue.component('Button', Button);
// Vue.component('Table', Table);

//在原型链中添加一个方法
Vue.prototype.sha512 = jsSha512;
//映入了任务头部
import task_header from './components/task/task_header'

// console.log(jsSha512)
//相当于安装插件
Vue.use(iview)

//暂时先不用elementui
// Vue.use(el)

Vue.config.productionTip = false

Vue.component('task-header', task_header);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
  // components: { App },
  // template: '<App/>'
});
