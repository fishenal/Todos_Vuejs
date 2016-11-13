<template>
  <li class="todo-line">
    <h3 @mouseenter="showDeleteTag" @mouseleave="hideDeleteTag">
      <input type="checkbox" @click="itemCheck(item)">
      <p class="item-label" v-bind:class="{ 'line-through': checked }">{{ index + 1 }} . {{ label  }} </p>
      <p class="item-status" v-if="checked">finished</p>
      <p class="item-delete" v-if="isShowDeleteTag" @click="deleteClick">Delete</p>
    </h3>
  </li>
</template>

<script>
export default {
  name: 'todo',
  props: {
    // 声明该组件接受的属性及类型
    label: {
      type: String,
      default: ''
    },
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
      // 触发该项自定义事件delete
      this.$emit('delete', this.index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
