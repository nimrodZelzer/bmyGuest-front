
// //dispatch from stay details to store
// reserveOrder() {
//     if (!this.date.length) {
//         showSuccessMsg(`please choose date!`)
//         return
//     }
//     const orderDet = {
//         startDate: this.date[0],
//         endDate: this.date[1],
//         guest: this.adultAmount,
//         totalPrice: this.totalPrice,
//         stayId: this.stay._id
//     }
//     showSuccessMsg(`reserved ${this.nights} nights succsesfully `)
//     this.$store.dispatch({
//         type: 'saveOrder',
//         order: orderDet
//     })
// }


// // the store dispatch
// saveOrder({ commit }, { order }) {
//     try {
//         const orderToSave = await orderService.save(order)
//         commit({ type: "saveOrder", order: orderToSave })
//         return orderService
//     } catch (err) {
//         console.log("Error: cannot save order", err)
//         throw err
//     }
// }

// //order service calls the backend

// async function save(order) {
//     console.log(order)
//     const savedOrder = order._id
//         ? await httpService.put("order", order)
//         : await httpService.post("order", order)
//     return savedOrder
// }

// // backend

// async function getOrders(req, res) {
//     try {
//         const orders = await orderService.query(req.query)
//         res.send(orders)
//     } catch (err) {
//         logger.error("Cannot get orders", err)
//         res.status(500).send({ err: "Failed to get orders" })
//     }
// }

// //service backend
// async function query() {
//     try {
//         const criteria = {}
//         const collection = await dbService.getCollection("order")
//         var order = await collection.find(criteria).toArray()
//         return order
//     } catch (err) {
//         logger.error("cannot find orders", err)
//         throw err
//     }







// // // in store function
// // saveOrder(state, { order }) {
// //     const idx = state.orders.findIndex(
// //         (currOrder) => currOrder._id === order._id
// //     )
// //     if (idx !== -1) {
// //         state.orders.splice(idx, 1, order)
// //     } else {
// //         state.orders.push(order)
// //     }
// },
