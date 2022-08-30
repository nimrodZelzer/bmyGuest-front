import { httpService } from "./http.service.js"
import { socketService } from "./socket.service.js"
const STORAGE_KEY_LOGGEDIN_USER = "loggedinUser"
const STORAGE_ADMIN = "admin"
export const userService = {
  getUsers,
  getUserById,
  updateUser,
  getLoggedinUser,
  login,
  logout,
  signup,
  adminLog,
}

async function getUsers(num) {
  try {
    const users = await httpService.get(`user`)
    _saveLocalUser(users[num])
    // socketService.emit("set-user-socket", users[num]._id)
    return users[num]
  } catch (err) {
    console.log("Cannot Get users from service", err)
    throw err
  }
}

async function getUserById(userId) {
  console.log(userId)
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

function adminLog() {
  const admin = {
    _id: "62e0e9b1dd13b00af4e80283",
    fullname: "Shunit bar-tal",
    imgUrl:
      "https://images.unsplash.com/photo-1658845489483-6d54f6d5a766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    username: "shunit",
    wishlist: [],
    createdAt: "2022-07-27T07:30:57.000Z",
  }
  _saveAdmin(admin)
  return admin
}

function _saveAdmin(admin) {
  sessionStorage.setItem(STORAGE_ADMIN, JSON.stringify(admin))
  return admin
}
