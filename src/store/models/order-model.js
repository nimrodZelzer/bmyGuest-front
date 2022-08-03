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
    currOrder: [],
    orderByHost: [],
    orderByUser: [],
    totalPriceArry: [],
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
        console.log(orders)
        commit({ type: "setOrders", orders })
      } catch (err) {
        console.log("Cannot load orders from store", err)
        throw err
      }
    },
    async saveOrder({ commit }, { order }) {
      console.log('here',order)
      try {
        const orderToSave = await orderService.save(order)
        socketService.emit(SOCKET_EVENT_ORDER_ADDED, orderToSave)
        // socket.emit(SOCKET_EVENT_ORDER_ADDED,, (userId) => {
        //   logger.debug(`Setting (${socket.id}) socket.userId = ${userId}`)
        //   socket.userId = userId
        // })

        commit({ type: "saveOrder", order: orderToSave })
        console.log(orderToSave, "ordertosaveeeee")
        return orderToSave
      } catch (err) {
        console.log("Error: cannot save order", err)
        throw err
      }
    },
    async getOrderByHost({ commit }, { id }) {
      const orders = await orderService.saveOrderByHostId(id)
      console.log(orders,'ggggggggggggggg')
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
      try {
        let orders = await orderService.save(order)
        console.log(orders)
        commit({ type: "setOrderByHost", orders })
      } catch (err) {
        console.log("Error in save orders", err)
        throw err
      }
    },
    async getOrderByUser({ commit }, { id }) {
      try {
        console.log(id)
        const orders = await orderService.saveOrderByUserId(id)
        console.log(orders, "from service")
        commit({ type: "setOrdersUsers", orders })
        return orders
      } catch (err) {
        console.log("Error in read orders", err)
        throw err
      }
    },
  },
}
