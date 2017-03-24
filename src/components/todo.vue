<template>
  <li class="todo-line">
    <h3>
      <input type="checkbox" @click="itemCheck(item)">
      <p class="item-label" v-bind:class="{ 'line-through': checked }">{{ index + 1 }} . {{ todoItem.text  }} </p>
      <p class="item-status" v-if="todoItem.done">finished</p>
      <p class="item-delete" @click="deleteClick">Delete</p>
    </h3>
  </li>
</template>

<script>
export default {
  props: {
    todoItem: Object,
    index: Number
  },
  data () {
    return {
      checked: false
    }
  },
  methods: {
    itemCheck () {
      this.$store.commit('toggleTodo', this.index)
    },
    deleteClick () {
      this.$store.commit('deleteTodo', this.index)
    }
  }
}
</script>

<style scoped>
.todo-line {
  height: 30px;
}
.item-status {
  display: inline;
  background: red;
  color: white;
  padding: 0 5px;
  font-size: 12px;
}
.item-delete {
  display: none;
  text-decoration: underline;
  font-size: 12px;
  color: gray;
  cursor: pointer;
}
.item-label {
  display: inline;
}
.line-through {
  text-decoration: line-through;
}
h3:hover {
  text-decoration: line-through;
}
h3:hover .item-delete {
  display: inline;
}
</style>
