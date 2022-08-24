import { orderService } from "../../services/order.service.js"
import { stayService } from "../../services/stay.service-toback.js"

import {
  socketService,
  SOCKET_EVENT_ORDER_ADDED,
} from "../../services/socket.service"

export default {
  state: {
    orders: [],
    currOrder: [],
    orderByHost: [],
    orderByUser: [],
    totalPriceArry: [],
    newOrder: {},
  },
  getters: {
    getCurrOrder(state) {
      return state.currOrders
    },
    getTotalPrices(state) {
      return state.totalPriceArry
    },
    getOrderPerHost(state) {
      return state.currOrders
    },
    getOrders(state) {
      return state.orders
    },
    getOrdersUser(state) {
      return state.orderByUser
    },
  },
  mutations: {
    setNewOrder(state, { order }) {
      console.log(order)
      state.newOrder = order
    },
    setOrders(state, { orders }) {
      state.orders = orders
    },
    updateOrder(state, payload) {
      const idx = state.orders.findIndex(
        (order) => order._id === payload.order._id
      )
      state.orders.splice(idx, 1, payload.order)
    },
    removeOrder(state, payload) {
      const idx = state.orders.findIndex(
        (order) => order._id === payload.orderId
      )
      state.orders.splice(idx, 1)
    },
    setOrderByHost(state, { orders }) {
      state.currOrders = orders
    },

    saveOrder(state, { order }) {
      const idx = state.orders.findIndex(
        (currOrder) => currOrder._id === order._id
      )
      if (idx !== -1) {
        state.orders.splice(idx, 1, order)
      } else {
        state.orders.push(order)
      }
    },
    updateOrder(state, newOrder) {
      const idx = state.orders.findIndex(
        (currOrder) => currOrder._id === newOrder._id
      )
      state.orders.splice(idx, 1, newOrder)
    },
    setOrdersUser(state, { orders }) {
      state.orderByUser = orders
    },
  },
  actions: {
    async loadOrders({ commit }) {
      try {
        const orders = await orderService.query()
        commit({ type: "setOrders", orders })
      } catch (err) {
        console.log("Cannot load orders from store", err)
        throw err
      }
    },
    async saveOrder({ commit }, { order }) {
      try {
        const orderToSave = await orderService.save(order)
        socketService.emit(SOCKET_EVENT_ORDER_ADDED, orderToSave)
        commit({ type: "saveOrder", order: orderToSave })
        return orderToSave
      } catch (err) {
        console.log("Error: cannot save order", err)
        throw err
      }
    },
    async getOrderByHost({ commit }, { id }) {
      const orders = await orderService.saveOrderByHostId(id)
      commit({ type: "setOrderByHost", orders })
      return orders
    },

    async removeOrder({ commit }, { orderId }) {
      const orderToRemove = await orderService.remove(orderId)
      commit({ type: "removeOrder", orderToRemove })
    },

    async loadHostOrders({ commit }, { id }) {
      try {
        const orderByHost = await orderService.saveOrderByHostId(id)
        commit({ type: "setOrderByHost", orderByHost })
      } catch (err) {
        console.log("Error in query stays (store)", err)
        throw err
      }
    },
    async loadOrder({ commit }, { filter }) {
      try {
        const orderByfilter = await orderService.getFilterOrders(filter)
        commit({ type: "setOrders", orderByfilter })
      } catch (err) {
        console.log("Error in query stays (store)", err)
        throw err
      }
    },
    async changeOrderStatus({ commit }, { order }) {
      try {
        let orders = await orderService.save(order)

        commit({ type: "setOrderByHost", orders })
      } catch (err) {
        console.log("Error in save orders", err)
        throw err
      }
    },
    async getOrderByUser({ commit }, { id }) {
      try {
        const orders = await orderService.saveOrderByUserId(id)
        commit({ type: "setOrdersUsers", orders })
        return orders
      } catch (err) {
        console.log("Error in read orders", err)
        throw err
      }
    },
  },
}
