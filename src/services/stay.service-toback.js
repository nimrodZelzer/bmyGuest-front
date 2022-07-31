import { httpService } from "./http.service.js"

const ENDPOINT = "stay"
const STAYS_KEY = "staydb"

const gLabels = [
  "Amazing pools",
  "Beach",
  "Camping",
  "Desert",
  "Amazing views",
  "National parks",
  "Cabins",
  "Design",
  "Islands",
  "OMG!",
  "Arctic",
  "Lakefront",
  "Tropical",
  "Bed & breakfasts",
  "Chef's Kitchens",
  "Ski-in",
  "Windmills",
  "Mansions",
]

export const stayService = {
  query,
  remove,
  save,
  getEmptyStay,
  getById,
  getLabels,
  updateWished,
  getHostStays,
}

async function query(filterBy = {}) {
  // console.log(filterBy)
  return await httpService.get(ENDPOINT, filterBy)
  return _saveLocalStay(stays)
  // if (!filterBy) return utilService.loadFromStorage(STAY_KEY)
  // gStays = utilService.loadFromStorage(STAY_KEY)
  // const { txt } = filterBy
  // let filteredStays = gStays.filter((stay) => stay.loc.country.includes(txt))
  // return filteredStays
  // const regExp = new RegExp(txt, "i")
  // let filteredStays = stays.filter((c) => regExp.test(c))
}

async function getById(stayId) {
  let stay=await httpService.get(`${ENDPOINT}/${stayId}`)
 console.log(stay)
  return stay
  // const stay = query().find((stay) => stay._id === stayId)
  // console.log(stay)
  // return stay
}

async function getHostStays(id) {
  try {
    const stays = await httpService.get(ENDPOINT)
    const stayByHost = stays.filter((stay) => stay.host.id === id)
    console.log(stayByHost)
    return stayByHost
  } catch (err) {
    console.log("Cannot load stays from store", err)
    throw err
  }
}

async function save(stay) {
  const savedStay = stay._id
    ? await httpService.put("stay", stay)
    : await httpService.post("stay", stay)
  return savedStay
}

async function remove(stayId) {
  return await httpService.delete(`${ENDPOINT}/${stayId}`)
  // const stays = query()
  // const idx = stays.findIndex((stay) => stay._id === stayId)
  // stays.splice(idx, 1)
  // utilService.saveToStorage(STAY_KEY, stays)
}


function getEmptyStay() {
  return Promise.resolve({})
}


function _saveLocalStay(stays) {
  sessionStorage.setItem(STAYS_KEY, JSON.stringify(stays))
  return stays
}

// // function addNewOrderToHost(order) {
// //    await httpService.put("stay", order)

function getLabels() {
  return gLabels
}

function updateWished(newStay) {
  save(newStay)
}

// // function addNewstayToHost(stay) {
// //    await httpService.put("stay", stay)

// // return stay
// }

// function _createStays() {
//   let stays = utilService.loadFromStorage(STAY_KEY)
//   if (!stays || !stays.length) {
//     stays = new Request("/src/services/stays.json")
//     fetch(stays)
//       .then((stay) => stay.json())
//       .then((stays) => utilService.saveToStorage(STAY_KEY, stays))
//   }
//   return stays
// }

// function update(newStay) {
//   const gStays = query()
//   const idx = gStays.findIndex((stay) => stay._id === newStay._id)
//   gStays.splice(idx, 1, newStay)
//   utilService.saveToStorage(STAY_KEY, gStays)
// }
