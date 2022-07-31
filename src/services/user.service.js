import { httpService } from "./http.service.js"
import { socketService } from "./socket.service.js"
const STORAGE_KEY_LOGGEDIN_USER = "loggedinUser"
export const userService = {
  getUsers,
  getUserById,
  updateUser,
  getLoggedinUser,
  login,
  logout,
  signup,
}

async function getUsers(num) {
  try {
    const users = await httpService.get(`user`)
    _saveLocalUser(users[num])
    socketService.emit("set-user-socket", users[0]._id)
    return users
  } catch (err) {
    console.log("Cannot load orders from store", err)
    throw err
  }
}

async function getUserById(userId) {
  const user = await httpService.get(`user/${userId}`)
  // gWatchedUser = user
  return user
}

async function updateUser(user) {
  const savedUser = await httpService.put(`user/${user._id}`, user)
  _saveLocalUser(user)
  return savedUser
}

function getLoggedinUser() {
  const user = JSON.parse(
    sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || "null"
  )

  return user
}

async function login(userCred) {
  const user = await httpService.post("auth/login", userCred)

  if (user) return _saveLocalUser(user)
}

async function signup(userCred) {
  const user = await httpService.post("auth/signup", userCred)
  return _saveLocalUser(user)
}

async function logout() {
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
  socketService.emit("unset-user-socket")
  return await httpService.post("auth/logout")
}

function _saveLocalUser(user) {
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
  return user
}
