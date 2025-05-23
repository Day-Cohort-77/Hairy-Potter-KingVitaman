// Import the usePottery function to get our catalog
import { usePottery } from "./potteryCatalog.js"

// This function creates the HTML for our pottery list
export const PotteryList = () => {
    // Get our list of pottery to sell
    const potteryToSell = usePottery()
    let potteryHTML = ""

    for (const pottery of potteryToSell) {
        potteryHTML += `
        <section class="pottery" id="pottery--${pottery.id}">
          <h2 class="pottery__shape">${pottery.shape}</h2>
          <div class="pottery__properties">
            <p>Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height</p>
          </div>
          <div class="pottery__price">Price is ${pottery.price}</div>
        </section>
        `
    }

    // Return all the HTML
    return potteryHTML
}
