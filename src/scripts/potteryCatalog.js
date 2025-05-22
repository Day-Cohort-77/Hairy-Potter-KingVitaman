// an empty list called
let potteryToSell = []
   /* Step 3: Make a function called toSellOrNotToSell that:
      - Takes in one thing: our pottery object
      - If the pottery is cracked:
         * Don't do anything else
      - If the pottery is not cracked:
         * If it weighs 6 or more:
            - Add a price of $40
         * If it weighs less than 6:
            - Add a price of $20
         * Put it in our potteryToSell list
      - Give back our pottery with the new price 
      */
export const toSellOrNotToSell = (pottery) => {
    if (pottery.cracked === true) {
        return pottery
    }
    if (pottery.cracked === false) {
        if (pottery.weight < 6) {
            pottery.price = 20
        }
        else {
            pottery.price = 40
        }
        potteryToSell.push(pottery)
    }
    
    return pottery
}
   /*Step 4: Make a function called usePottery that:
      - Gives back a copy of our potteryToSell list */
export const usePottery = () => {
    const potteryCopy = [...potteryToSell]
    return potteryCopy
}  

