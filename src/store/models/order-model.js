import { orderService } from "../../services/order.service.js"
import { stayService } from "../../services/stay.service-toback.js"

import {
  socketService,
  SOCKET_EVENT_ORDER_ADDED,
  // SOCKET_EVENT_ORDER_ABOUT_YOU,
  // SOCKET_EVENT_ORDER_UPDATED,
} from "../../services/socket.service"

export default {
  state: {
    orders: [],
    currOrder: "",
    orderByHost: [],
    totalPriceArry: [],
  },
  getters: {
    getCurrOrder(state) {
      return state.currOrders
    },
    getTotalPrices(state) {
      return state.totalPriceArry
    },
    getOrderPerMonth(state) {
      let month = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      state.orderByHost.forEach((order) => {
        let orderDate = order.checkin.getMonth()
        console.log(orderDate)
        month[orderDate] += order.totalPrice
        return
      })
      return month
    },
    getOrders(state) {
      return state.orders
    },
  },
  mutations: {
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
      orders.forEach((orders) => {
        state.totalPriceArry.push(orders.totalPrice)
      })
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
  },
  actions: {
    async loadOrders({ commit }, { id }) {
      console.log(id)
      try {
        const orders = await orderService.query(id)
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
        // socket.emit(SOCKET_EVENT_ORDER_ADDED,, (userId) => {
        //   logger.debug(`Setting (${socket.id}) socket.userId = ${userId}`)
        //   socket.userId = userId
        // })

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
      console.log(id)
      try {
        const orderByHost = await orderService.saveOrderByHostId(id)
        console.log(orderByHost)
        commit({ type: "setOrderByHost", orderByHost })
      } catch (err) {
        console.log("Error in query stays (store)", err)
        throw err
      }

      // socketService.off(SOCKET_EVENT_ORDER_ABOUT_YOU)
      // socketService.on(SOCKET_EVENT_ORDER_ABOUT_YOU, (order) => {
      //   console.log("New order!", order)
      //   commit({ type: " saveOrder", order })
      //   // commit({ type: "newOrder", order })
      // })
    },
    async loadOrder({ commit }, { filter }) {
      console.log(filter)
      try {
        const orderByfilter = await orderService.getFilterOrders(filter)
        console.log(orderByfilter)
        commit({ type: "setOrders", orderByfilter })
      } catch (err) {
        console.log("Error in query stays (store)", err)
        throw err
      }
    },
    async changeOrderStatus({ commit }, { order }) {
      console.log(order)
      try {
        await orderService.save(order)
        console.log("saved to server")
      } catch (err) {
        console.log("Error in query stays (store)", err)
        throw err
      }
    },
  },
}
