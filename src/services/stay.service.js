import { utilService } from "./util.service.js"

import { httpService } from "./http.service"

const STAY_KEY = "stays"
const ENDPOINT = "stay"

// var gStays = _createStays()

const labels = [
  "Amazing pools",
  "Beach",
  "Cabins",
  "Camping",
  "Desert",
  "Design",
  "Islands",
  "National parks",
  "OMG!",
  "Amazing views",
  "Arctic",
  "Lakefront",
  "Tropical",
  "Windmills",
  "Ski-in",
  "Golfing",
  "Chef's Kitchens",
  "Bed & breakfasts",
  "Mansions",
]

export const stayService1 = {
  query,
  remove,
  update,
  getEmptyStay,
  getById,
  getLabels,
  updateWished,
  addNewOrder,
  getHostStays,
}
_createStays()

// function query1(filterBy = null) {
//   if (!filterBy) return utilService.loadFromStorage(STAY_KEY)
//   gStays = utilService.loadFromStorage(STAY_KEY)
//   const { txt } = filterBy
//   let filteredStays = gStays.filter((stay) => stay.loc.country.includes(txt))
//   return filteredStays
//   // const regExp = new RegExp(txt, "i")
//   // let filteredStays = stays.filter((c) => regExp.test(c))
// }

async function query(filterBy = {}) {
  return await httpService.get(ENDPOINT, filterBy)
  // if (!filterBy) return utilService.loadFromStorage(STAY_KEY)
  // gStays = utilService.loadFromStorage(STAY_KEY)
  // const { txt } = filterBy
  // let filteredStays = gStays.filter((stay) => stay.loc.country.includes(txt))
  // return filteredStays
  // const regExp = new RegExp(txt, "i")
  // let filteredStays = stays.filter((c) => regExp.test(c))
}

function getById(stayId) {
  const stay = query().find((stay) => stay._id === stayId)
  console.log(stay)
  return stay
}

function getHostStays(id){
  try{
    const stays=await httpService.get(ENDPOINT)   
    const stayByHost=stays.filter((stays)=>stays.host.id===id)
    console.log(orderByHost)
    utilService.saveToStorage(STAY_HOST_KEY, stayByHost)
     return orderByHost
    } catch (err) {
      console.log("Cannot load orders from store", err)
      throw err
    }

}

function addNewOrder(order) {
  console.log(order.stayId)
  console.log(gStays[0]._id)

  let idx = gStays.findIndex((stay) => stay._id === order.stayId)
  gStays[idx].host.reservaition.push(order)
  utilService.saveToStorage(STAY_KEY, gStays)
}

function getLabels() {
  return labels
}

function remove(stayId) {
  const stays = query()
  const idx = stays.findIndex((stay) => stay._id === stayId)
  stays.splice(idx, 1)
  utilService.saveToStorage(STAY_KEY, stays)
}

function update(newStay) {
  const gStays = query()
  const idx = gStays.findIndex((stay) => stay._id === newStay._id)
  gStays.splice(idx, 1, newStay)
  utilService.saveToStorage(STAY_KEY, gStays)
}

function updateWished(newStay) {
  update(newStay)
}

function getEmptyStay() {
  return {}
}

function _createStays() {
  let stays = utilService.loadFromStorage(STAY_KEY)
  if (!stays || !stays.length) {
    stays = new Request("/src/services/stays.json")
    fetch(stays)
      .then((stay) => stay.json())
      .then((stays) => utilService.saveToStorage(STAY_KEY, stays))
  }
  return stays
}

