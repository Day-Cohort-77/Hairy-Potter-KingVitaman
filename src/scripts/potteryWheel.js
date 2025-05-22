// This variable keeps track of the ID for each piece of pottery
let potteryId = 1

// This function creates a new piece of pottery
export const makePottery = (shape, weight, height) => {
    // Create a new pottery object with all the properties
    const pottery = {
        shape: shape,
        weight: weight,
        height: height,
        id: potteryId
    }
    
    // Increase the ID for the next piece of pottery
    potteryId++
    
    // Return the new pottery object
    return pottery
}
