export const state = () => ({
  list: []
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text: text,
      done: false
    })
  },
  remove(state, {
    favorite
  }) {
    state.list.splice(state.list.indexOf(favorite), 1)
  },
  toggle(state, favorite) {
    favorite.done = !favorite.done
  }
}
