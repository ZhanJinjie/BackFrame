import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Axios } from './http'

import Button from 'primevue/button';//按钮样式
import Chart from 'primevue/chart'; //图表
import Checkbox from 'primevue/checkbox';//复选框
import DataTable from 'primevue/datatable';//数据表
import Column from 'primevue/column';//数据表-列
import ColumnGroup from 'primevue/columngroup'; //数据表-列组
import Dropdown from 'primevue/dropdown';//下拉列表
import FullCalendar from 'primevue/fullcalendar';//日历
import InputText from 'primevue/inputtext'//输入框
import Panel from 'primevue/panel';//仪表盘，面板

import Spinner from 'primevue/spinner';


// import 'primevue/resources/themes/nova-colored/theme.css'
// import 'primevue/resources/themes/nova-vue/theme.css'
// import 'primevue/resources/themes/nova-dark/theme.css'
import 'primevue/resources/themes/nova-light/theme.css'//“选中”是的边框样式
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';//图标样式
import 'prismjs/themes/prism-coy.css';
import '@fullcalendar/core/main.min.css';
import '@fullcalendar/daygrid/main.min.css';
import '@fullcalendar/timegrid/main.min.css';
import './assets/layout/layout.scss';


Vue.config.productionTip = false

// 挂载到Vue的原型对象上
Vue.prototype.$axios = Axios;

// 注册全局组件
Vue.component('Button', Button);
Vue.component('Chart', Chart);
Vue.component('Checkbox', Checkbox);
Vue.component('DataTable', DataTable);
Vue.component('Column', Column);
Vue.component('ColumnGroup', ColumnGroup);
Vue.component('Dropdown', Dropdown);
Vue.component('FullCalendar',FullCalendar)
Vue.component('InputText', InputText);
Vue.component('Panel', Panel);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
