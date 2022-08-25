import { createStore } from "vuex"
import stayModul from "./models/stay-model.js"
import orderModul from "./models/order-model.js"
import userModul from "./models/user-model.js"

const store = createStore({
  strict: true,
  state: {
    currPage: "",
    openHeader: false,
  },
  getters: {
    currPage(state) {
      return state.currPage
    },
    openHeader(state) {
      return state.openHeader
    },
  },
  mutations: {
    setCurrPage(state, { page }) {
      state.currPage = page
      // console.log(page)
    },
    setOpenHeader(state, { currVal }) {
      // console.log("openHeader: ", currVal)
      state.openHeader = currVal
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
