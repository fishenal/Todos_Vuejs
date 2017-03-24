import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { initializeApp as init, database as db} from 'firebase'

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    storageBucket: "",
    messagingSenderId: ""
}

init(config)

const STORAGE_KEY = 'todos-vuejs'
const FBRef = db().ref(STORAGE_KEY)
function createFirebaseDb (fbRef) {
  return store => {
    fbRef.on('value', snapshot => {
        store.commit('receiveData', snapshot.val())
    })
    store.subscribe((mutation, state) => {
        fbRef.set(state.todos)
    })
  }
}

const state = {
    todos: []
}
const getters = {
    todos:  state => state.todos
} 
const mutations = {
    addTodo (state, text) {
        state.todos.push({
            text,
            done: false
        })
    },
    deleteTodo (state, index) {
        state.todos.splice(index, 1)
    },
    toggleTodo (state, index) {
        state.todos[index].done = !state.todos[index].done
    },
    receiveData (state, data) {
        state.todos = data
    }
}

const storagePlugin = createFirebaseDb(FBRef)
export default new Vuex.Store({
  state,
  getters,
  mutations,
  plugins: [storagePlugin]
})