<template>
  <li class="todo-line">
    <h3>
      <input type="checkbox" @click="itemCheck(item)">
      <p class="item-label" v-bind:class="{ 'line-through': checked }">{{ index + 1 }} . {{ todoItem.text  }} </p>
      <p class="item-status" v-if="checked">{{ todoItem.done ? 'finished' : '' }}</p>
      <p class="item-delete" v-if="isShowDeleteTag" @click="deleteClick">Delete</p>
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
      isShowDeleteTag: false,
      checked: false
    }
  },
  methods: {
    itemCheck () {
      this.checked = !this.checked
    },
    showDeleteTag () {
      this.isShowDeleteTag = true
    },
    hideDeleteTag () {
      this.isShowDeleteTag = false
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
  display: inline;
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
</style>
