import { createRouter, createWebHashHistory } from "vue-router"
import deshboardHost from "../pages/deshboard-host.vue"
import explorePage from "../pages/explore-page.vue"
import homePage from "../pages/home-page.vue"
import stayDetails from "../pages/stay-details.vue"
import userWishlist from "../pages/user-wishlist.vue"
import userOrder from "../pages/user-order.vue"

const router = createRouter({
  history: createWebHashHistory(),
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

export default router
