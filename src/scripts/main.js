import { makePottery } from "./potteryWheel.js"
import { firePottery } from "./kiln.js"
import { toSellOrNotToSell, usePottery } from "./potteryCatalog.js"
import { PotteryList } from "./potteryList.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 3, 6)
let bowl = makePottery("Bowl", 5, 4)
let plate = makePottery("Plate", 7, 2)
let vase = makePottery("Vase", 8, 10)
let cup = makePottery("Cup", 2, 5)

// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2000)
let firedBowl = firePottery(bowl, 2300)  // This one will be cracked
let firedPlate = firePottery(plate, 2100)
let firedVase = firePottery(vase, 2200)
let firedCup = firePottery(cup, 2150)

// Check our fired pottery
console.log("=== FIRED POTTERY ===")
console.log("Mug (2000°):", firedMug)
console.log("Bowl (2300° - will be cracked):", firedBowl)
console.log("Plate (2100°):", firedPlate)
console.log("Vase (2200°):", firedVase)
console.log("Cup (2150°):", firedCup)

// Determine which ones should be sold, and their price
let pricedMug = toSellOrNotToSell(firedMug)
let pricedBowl = toSellOrNotToSell(firedBowl)
let pricedPlate = toSellOrNotToSell(firedPlate)
let pricedVase = toSellOrNotToSell(firedVase)
let pricedCup = toSellOrNotToSell(firedCup)

// Check our catalog
console.log("\n=== POTTERY CATALOG ===")
console.log("Items for sale:", usePottery())

// Invoke the component function that renders the HTML list
const potteryHTML = PotteryList()

// Get the article element and update its HTML
document.querySelector(".potteryList").innerHTML = potteryHTML



