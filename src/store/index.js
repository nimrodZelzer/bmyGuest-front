import { createStore } from "vuex"
import stayModul from "./models/stay-model.js"
import orderModul from "./models/order-model.js"
import userModul from "./models/user-model.js"

const store = createStore({
  strict: true,
  state: {
    currPage: "homePage",
  },
  getters: {
    currPage(state) {
      return state.currPage
    },
  },
  mutations: {
    setCurrPage(state, { page }) {
      state.currPage = page
    },
  },
  actions: {},
  modules: {
    stayModul,
    orderModul,
    userModul,
  },
})

export default store
