<template>
  <div id="app">
    <h2>Simply todolist - vuejs</h2>
    <input id="add-input" v-model="newTodo" @keyup.enter="addTodo" placeholder="do what?"/>
    <ul>
      <!-- 循环插入todo组件, 并动态传入label index,监听自定义方法delete-->
      <todo v-for="(label, index) in todoList" :label="label" :index="index" @delete="deleteTodo"></todo>
    </ul>
  </div>
</template>

<script>
import Todo from './components/todo'
export default {
  name: 'todoList',
  components: {
    //声明todo组件作为列表的每一行
    Todo
  },
  data () {
    return {
      newTodo: '',// 新增项输入
      todoList: []//保存列表的属性
    }
  },
  watch: {
    todoList (newList) {
      // 监听组件列表数据并将其保存到localstorage中
      this.$localStorage.set('vueTodoList', newList)
    }
  },
  mounted () {
    // 组件渲染完毕从localstorage中取出列表数据
    this.todoList = this.$localStorage.get('vueTodoList')
  },
  methods: {
    addTodo () {
      this.todoList.push(this.newTodo)
      this.newTodo = ''
    },
    deleteTodo (index) {
      // 删除指定项列表
      this.todoList.splice(index, 1)
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
#app {
  width: 800px;
  margin: 30px auto;
}
#add-input {
  width: 750px;
  height: 35px;
  padding: 0 5px;
}
ul {
  list-style: none;
  padding: 0;
}
</style>
