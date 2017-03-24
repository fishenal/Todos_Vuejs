<template>
  <div id="app">
    <h2>Simply todolist - vuejs</h2>
    <input id="add-input" v-model="todoText" @keyup.enter="addTodo" placeholder="do what?"/>
    <ul>
      <todo v-for="(todoItem, index) in todoList" :todoItem="todoItem" :index="index"></todo>
    </ul>
  </div>
</template>

<script>
import Todo from './components/todo'
export default {
  name: 'todoList',
  components: {
    Todo
  },
  data () {
    return {
      todoText: ''
    }
  },
  computed: {
    todoList () {
      return this.$store.getters.todos
    }
  },
  methods: {
    addTodo () {
      this.$store.commit('addTodo', this.todoText)
      this.todoText = ''
    },
    deleteTodo (index) {
      this.$store.commit('deleteTodo', index)
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
