import { httpService } from "./http.service.js"
import { socketService, SOCKET_EVENT_ORDER_ADDED } from "./socket.service.js"
const STORAGE_KEY_ORDER_HOST = "loggedinUser"

const ENDPOINT = "order"

export const orderService = {
  addNewOrder,
  query,
  saveOrderByHostId,
  getOrdersHost,
  remove,
  save,
  getFilterOrders,
}

async function query(filterBy = {}) {
  console.log("here")
  return httpService.get(ENDPOINT, filterBy)
}

async function addNewOrder(order) {
  const addedOrder = await httpService.post(`order`, order)
  socketService.emit(SOCKET_EVENT_ORDER_ADDED, order)

  return addedOrder
}

async function saveOrderByHostId(hostId, filter = null) {
  try {
    const orders = await httpService.get(ENDPOINT)
    const orderByHost = orders.filter((order) =>
      order.host.hostId === hostId ? hostId : "62e0e9b1dd13b00af4e80283"
    )
    console.log(orderByHost, "orderbyhosttttttttttttttttttttt")
    if (!filter) return orderByHost
    let orderByStatus = orderByHost.filter((order) => order.status === filter)
    _saveLocalOrder(orderByStatus)
    return orderByStatus
  } catch (err) {
    console.log("Cannot load orders from store", err)
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
  console.log(order, "in save")
  console.log(order._id, "in save")
  const savedOrder = order._id
    ? await httpService.put("order", order)
    : await httpService.post("order", order)
  return savedOrder
}

async function remove(id) {
  return await httpService.delete(`${ENDPOINT}/${id}`)
}

function getOrdersHost() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_ORDER_HOST) || "null")
}

function _saveLocalOrder(orders) {
  sessionStorage.setItem(STORAGE_KEY_ORDER_HOST, JSON.stringify(orders))
  return orders
}
