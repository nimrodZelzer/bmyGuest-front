import { httpService } from "./http.service.js"
import { socketService, SOCKET_EVENT_ORDER_ADDED } from "./socket.service.js"
const STORAGE_KEY_ORDER_HOST = "loggedinUser"
const STORAGE_KEY_ORDER = "order"

const ENDPOINT = "order"

export const orderService = {
  addNewOrder,
  query,
  saveOrderByHostId,
  getOrdersHost,
  remove,
  save,
  getFilterOrders,
  saveOrderByUserId,
}

async function query(filterBy = {}) {
  return httpService.get(ENDPOINT, filterBy)
}

async function addNewOrder(order) {
  const addedOrder = await httpService.post(`order`, order)
  socketService.emit(SOCKET_EVENT_ORDER_ADDED, order)

  return addedOrder
}

async function saveOrderByHostId(hostId) {
  try {
    const orders = await httpService.get(ENDPOINT)
    const orderByHost = orders.filter((order) => order.host.hostId === hostId)
    _saveLocalOrder(orderByHost)  
    return orderByHost
  } catch (err) {
    console.log("Cannot load orders from store", err)
    throw err
  }
}
async function saveOrderByUserId(Id) {
  try {
    const orders = await httpService.get(ENDPOINT)
    const orderByUser =  orders.filter((order)=>order.guestsDetails.guestId===Id)
    return orderByUser
  } catch (err) {
    console.log("Cannot load user orders from store", err)
    throw err
  }
}
async function getFilterOrders(filter) {
  try {
    const orders = await httpService.get(ENDPOINT)
    const ordersFilter = orders.filter(
      (order) => order.status === filter.status
    )
    return ordersFilter
  } catch (err) {
    console.log("Cannot load orders from store", err)
    throw err
  }
}

async function save(order) {
  const savedOrder = order._id
    ? await httpService.put("order", order)
    : await httpService.post("order", order)
  const orders = getOrdersHost()
  const idx = orders.findIndex((reserv) => reserv._id === order._id)
  orders.splice(idx, 1, savedOrder)
  _saveLocalOrder(orders)
  return orders
}

async function remove(id) {
  return await httpService.delete(`${ENDPOINT}/${id}`)
}

function getOrdersHost() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_ORDER) || "null")
}

function _saveLocalOrder(orders) {
  sessionStorage.setItem(STORAGE_KEY_ORDER, JSON.stringify(orders))
  return orders
}
