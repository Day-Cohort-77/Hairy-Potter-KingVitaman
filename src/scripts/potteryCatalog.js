// This is our list to store pottery that we want to sell
let potteryToSell = []
   
// This function decides if pottery should be sold and sets its price
export const toSellOrNotToSell = (pottery) => {
    // If the pottery is cracked, we can't sell it
    if (pottery.cracked === true) {
        return pottery
    }
    // If the pottery is not cracked, we can sell it
    if (pottery.cracked === false) {
        // Set the price based on weight
        if (pottery.weight < 6) {
            pottery.price = 20  // Light pottery costs $20
        }
        else {
            pottery.price = 40  // Heavy pottery costs $40
        }
        // Add the pottery to our list of items to sell
        potteryToSell.push(pottery)
    }
    
    // Give back the pottery with its new price
    return pottery
}
   
// This function gives us a copy of our list of pottery to sell
export const usePottery = () => {
    // Make a copy of the array using the spread operator
    const potteryCopy = [...potteryToSell]
    // Give back the copy
    return potteryCopy
}