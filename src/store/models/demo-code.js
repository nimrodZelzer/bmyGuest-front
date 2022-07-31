//dispatch from stay details to store
reserveOrder() {
    if (!this.date.length) {
        showErrorMsg(`please choose date!`)
        return
    }
    const orderDet = {
        startDate: this.date[0],
        endDate: this.date[1],
        guest: this.adultAmount,
        totalPrice: this.totalPrice,
        stayId: this.stay._id
    }
    this.$store.dispatch({
        type: 'saveOrder',
        order: orderDet
    })
    showSuccessMsg(`reserved ${this.nights} nights succsesfully `)
},


// the store dispatch
async saveOrder({ commit }, { order }) {
    try {
        const orderToSave = await orderService.save(order)
        commit({ type: "saveOrder", order: orderToSave })
        return orderService
    } catch (err) {
        console.log("Error: cannot save order", err)
        throw err
    }
},

//order service calls the backend

async function save(order) {
    const savedOrder = order._id
        ? await httpService.put("order", order)
        : await httpService.post("order", order)
    return savedOrder
}

// backend

async function getOrders(req, res) {
    try {
        const orders = await orderService.query(req.query)
        res.send(orders)
    } catch (err) {
        logger.error("Cannot get orders", err)
        res.status(500).send({ err: "Failed to get orders" })
    }
}

//service backend
async function query() {
    try {
        const criteria = {}
        const collection = await dbService.getCollection("order")
        var order = await collection.find(criteria).toArray()
        return order
    } catch (err) {
        logger.error("cannot find orders", err)
        throw err