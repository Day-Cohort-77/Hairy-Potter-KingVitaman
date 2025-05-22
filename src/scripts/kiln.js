// This function fires pottery in the kiln
export const firePottery = (pottery, temp) => {
    // Add the fired property
    pottery.fired = true
    
    // Add the cracked property based on temperature
    if (temp > 2200) {
        pottery.cracked = true
    } else {
        pottery.cracked = false
    }
    
    // Return the modified pottery object
    return pottery
}