import { stayService } from "../../services/stay.service-toback.js"

export default {
  state: {
    stays: [],
    currStay: {},
    filterBy: { txt: "", price: { min: "", max: "" } },
    sortBy: {},
    imgToDisplayCard: {},
    labels: {},
    currDate: [],
    orders: [],
    currHostStay: [],
  },
  getters: {
    stays(state) {
      return state.stays
    },
    getImg(state) {
      return state.imgToDisplay
    },
    getLebels(state) {
      return state.labels
    },
    getCurrStay(state) {
      return state.currStay
    },
    getIsWished(state) {
      return state.currStay.wished
    },
    getCurrDate(state) {
      return state.currDate
    },
    getCurrHostStay(state) {
      return state.currHostStay
    },
  },
  mutations: {
    setStays(state, { stays }) {
      state.stays = stays
    },
    setLabels(state, { labels }) {
      state.labels = labels
    },

    setStayById(state, { stay }) {
      state.currStay = { ...stay }
    },
    wishStay(state) {
      state.currStay.wished = !state.currStay.wished
    },
    setFilterBy(state, { filterBy }) {
      state.filterBy = filterBy
    },
    setCurrDate(state, { date }) {
      state.currDate = date
    },
    setCurrStay1(state, { stay }) {
      state.currStay = stay
    },
    setHostStays(state, { id }) {
      let stayHost = state.stays.filter((stay) => stay.host.id === id)
      state.currHostStay = stayHost
    },
    setFilterBy(state, { filterBy }) {
      state.filterBy = filterBy
    },
  },
  actions: {
    async loadStays({ commit }, { filterBy }) {
      commit({ type: "setFilterBy", filterBy })
      console.log("yoyo", this.filterBy)
      try {
        const stays = await stayService.query(filterBy)
        commit({ type: "setStays", stays })
      } catch (err) {
        console.log("Error in query stays (store)", err)
        throw err
      }
    },
    loadLabels({ commit }) {
      let labels = stayService.getLabels()
      // console.log(labels)
      commit({ type: "setLabels", labels })
    },

    async loadById({ commit }, { id }) {
      console.log(id)
      try {
        const stay = await stayService.getById(id)
        commit({ type: "setStayById", stay })
      } catch (err) {
        console.log("Error in getById stays (store)", err)
        throw err
      }
    },

    wishStay({ commit }, { stay }) {
      stayService.update(stay)
      commit({ type: "setStayById", stay })
      commit({ type: "wishStay" })
    },
    loadCurrDate({ commit }, { date }) {
      commit({ type: "setCurrDate", date })
    },
    async saveStay({ commit }, { stay }) {
      try {
        console.log(stay, "we got it")
        const stayToSave = await stayService.save(stay)
        commit({ type: "setStays" })
        return stayToSave
      } catch (err) {
        console.log("Error: cannot save stay", err)
        throw err
      }
    },
    async getStaysByHost({ commit }, { id }) {
      const staysahostArrey = stayService.getHostStays(id)
      return staysahostArrey
    },
  },
}
