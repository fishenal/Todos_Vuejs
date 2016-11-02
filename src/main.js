// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import TodoList from './todoList'
// 使用VueLocalStorage 作为localstorage 存储插件
// 仓库： https://github.com/pinguinjkeke/vue-local-storage
import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage)
/* eslint-disable no-new */
new Vue({
  // 根组件内声明使用的localstorage
  localStorage: {
    vueTodoList: {
      type: Array,
      default: []
    }
  },
  el: '#app',
  render: h => h(TodoList)
})
