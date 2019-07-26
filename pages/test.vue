<template>
  <ul>
    <li v-for="todo in todos" :key="todo">
      <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </li>
    <li>
      <input placeholder="What needs to be done?" @keyup.enter="addTodo">
    </li>
    {{$store.state.todos.list}}
    <div>-------------------</div>

    <li v-for="(item, index) in favorites" :key="index">
      <input type="checkbox" :checked="item.done" @change="toggle(item)">
      <span :class="{ done: item.done }">{{ item.text }}</span>
    </li>
    <li>
      <input placeholder="favorites?" @keyup.enter="addFavorite">
    </li>
    {{$store.state.favorites.list}}
  </ul>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  computed: {
    todos() {
      return this.$store.state.todos.list;
    },
    favorites() {
      return this.$store.state.favorites.list;
    }
  },
  methods: {
    addTodo(e) {
      this.$store.commit("todos/add", e.target.value);
      e.target.value = "";
    },
    ...mapMutations({
      toggle: "todos/toggle"
      // toggle: "favorites/toggle"
    }),
    addFavorite(e) {
      this.$store.commit("favorites/add", e.target.value);
      e.target.value = "";
    }
  }
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>