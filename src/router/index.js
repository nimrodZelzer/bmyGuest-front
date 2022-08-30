import { createRouter, createWebHashHistory } from "vue-router"
import { isNavigationFailure } from "vue-router"
import deshboardHost from "../pages/deshboard-host.vue"
import explorePage from "../pages/explore-page.vue"
import homePage from "../pages/home-page.vue"
import stayDetails from "../pages/stay-details.vue"
import userWishlist from "../pages/user-wishlist.vue"
import userOrder from "../pages/user-order.vue"

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: homePage,
    },
    {
      path: "/wishlist",
      name: "wish-list-page",
      component: userWishlist,
    },
    {
      path: "/order",
      name: "order",
      component: deshboardHost,
    },
    {
      path: "/explore/:destination?",
      name: "explore-page",
      component: explorePage,
    },
    {
      path: "/stay/:stayId?",
      name: "stay-details",
      component: stayDetails,
    },
    {
      path: "/orders",
      name: "orders-page",
      component: userOrder,
    },
  ],
})

// router.afterEach((to, from, failure) => {
//   console.log("to: ", to)
//   console.log("from: ", from)
//   if (isNavigationFailure(failure)) {
//     console.log("failed navigation", failure)
//   }
// })

// console.log(router)

export default router
