import io from "socket.io-client"

export const SOCKET_EMIT_USER_WATCH = "user-watch"
export const SOCKET_EVENT_USER_UPDATED = "user-updated"
export const SOCKET_EVENT_ORDER_ADDED = "order-added"
export const SOCKET_EVENT_ORDER_UPDATED = "order-updated"
export const SOCKET_EVENT_ORDER_ABOUT_YOU = "order-about-you"

const baseUrl = process.env.NODE_ENV === "production" ? "" : "//localhost:3030"
export const socketService = createSocketService()
// export const socketService = createDummySocketService()

window.socketService = socketService

// var socketIsReady = false;
socketService.setup()

function createSocketService() {
  var socket = null
  const socketService = {
    async setup() {
      socket = io(baseUrl)
    },
    on(eventName, cb) {
      socket.on(eventName, cb)
    },
    off(eventName, cb = null) {
      if (!socket) return
      if (!cb) socket.removeAllListeners(eventName)
      else socket.off(eventName, cb)
    },
    emit(eventName, data) {
      socket.emit(eventName, data)
    },
    terminate() {
      socket = null
    },
  }
  return socketService
}


