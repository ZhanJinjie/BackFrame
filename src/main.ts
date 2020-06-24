import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Axios} from './http'

import Chart from 'primevue/chart'; //图表
import Checkbox from 'primevue/checkbox';//复选框

import DataTable from 'primevue/datatable';//数据表
import Column from 'primevue/column';//数据表-列
import ColumnGroup from 'primevue/columngroup'; //数据表-列组

import Dropdown from 'primevue/dropdown';//下拉列表
import InputText from 'primevue/inputtext'//输入框
import Panel from 'primevue/panel';//仪表盘，面板


import 'primevue/resources/themes/nova/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import './assets/layout/layout.scss';


Vue.config.productionTip = false

// 挂载到Vue的原型对象上
Vue.prototype.$axios = Axios;

// 注册全局组件
Vue.component('Chart', Chart);
Vue.component('Checkbox', Checkbox);
Vue.component('DataTable', DataTable);
Vue.component('Column', Column);
Vue.component('ColumnGroup', ColumnGroup);
Vue.component('Dropdown', Dropdown);
Vue.component('InputText', InputText);
Vue.component('Panel', Panel);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
