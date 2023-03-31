import { boot } from 'quasar/wrappers';
import axios from 'axios';

const api = axios.create({ baseURL: 'https://api.example.com' });

export default boot(({ app }) => {
  // 在 Vue 文件中（选项式 API），我们可访问 this.$axios and this.$api
  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ 这样允许我们使用 this.$axios (Vue 选项式 API 格式)
  //       所以我们不需要要在每个 vue 文件中导入 axios

  app.config.globalProperties.$api = api;
  // ^ ^ ^ 这样允许我们使用 this.$api (Vue 选项式 API 格式)
  //       我们可以更简单的请求数据
});

export { axios, api };
