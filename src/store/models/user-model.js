import { userService } from "../../services/user.service.js"
import {
  socketService,
  SOCKET_EMIT_USER_WATCH,
  SOCKET_EVENT_USER_UPDATED,
} from "../../services/socket.service"
export default {
  state: {
    loggedinUser: {},
    users: [],
    watchedUser: null,
    userOrders: [],
    admin: userService.adminLog(),
  },
  getters: {
    users({ users }) {
      return users
    },
    loggedinUser({ loggedinUser }) {
      console.log('gettershhhhhhhhhhhhhhhhhhhhhh:,', loggedinUser)
      return loggedinUser
    },
    watchedUser({ watchedUser }) {
      return watchedUser
    },
    getAdmin(state) {
      return state.admin
    },
  },
  mutations: {
    setLoggedinUser(state, { user }) {
      state.loggedinUser = user
<<<<<<< HEAD

=======
>>>>>>> b11b97a3acf9e5520c9bf20db245776710ffb32a
    },
    setWatchedUser(state, { user }) {
      state.watchedUser = user
    },
    setUsers(state, { users }) {
      state.users = users
    },
  },
  actions: {
    async setLoggedinUser({ commit }, { num }) {
      try {
        const user = await userService.getUsers(num)
        console.log(user)
        commit({ type: "setLoggedinUser", user })
      } catch (err) {
        console.log("userStore: Error in loadloggedinuser", err)
      }
    },
    async login({ commit }, { userCred }) {
      try {
        const user = await userService.login(userCred)
        commit({ type: "setLoggedinUser", user })
        return user
      } catch (err) {
        console.log("userStore: Error in login", err)
        throw err
      }
    },
    async signup({ commit }, { userCred }) {
      try {
        const user = await userService.signup(userCred)
        commit({ type: "setLoggedinUser", user })
        return user
      } catch (err) {
        console.log("userStore: Error in signup", err)
        throw err
      }
    },
    async logout({ commit }) {
      try {
        await userService.logout()
        commit({ type: "setLoggedinUser", user: null })
      } catch (err) {
        console.log("userStore: Error in logout", err)
        throw err
      }
    },
    async loadUsers({ commit }, { num }) {
      try {
        const user = await userService.getUsers(num)
        console.log(user,'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjj')
        commit({ type: "setLoggedinUser", user })
      } catch (err) {
        console.log("userStore: Error in loadUsers", err)
        throw err
      }
    },
    async loadAndWatchUser({ commit }, { userId }) {
      try {
        const user = await userService.getById(userId)
        commit({ type: "setWatchedUser", user })
        socketService.emit(SOCKET_EMIT_USER_WATCH, userId)
        socketService.off(SOCKET_EVENT_USER_UPDATED)
        socketService.on(SOCKET_EVENT_USER_UPDATED, (user) => {
          commit({ type: "setWatchedUser", user })
        })
      } catch (err) {
        console.log("userStore: Error in loadAndWatchUser", err)
        throw err
      }
    },
    async updateUser({ commit }, { user }) {
      try {
        user = await userService.update(user)
        commit({ type: "setUser", user })
      } catch (err) {
        console.log("userStore: Error in updateUser", err)
        throw err
      }
    },
  },
}
