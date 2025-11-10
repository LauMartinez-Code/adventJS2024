/**
 * @param {number[]} gifts - The array of gifts to prepare
 * @returns {number[]} An array with the prepared gifts
 */
function prepareGifts(gifts) {
    if (!Array.isArray(gifts)) {
        console.error("The function parameter is not an array");
        return;
    }

    if (gifts.length <= 1) {
        return gifts;
    }
    
    const uniqueGifts = new Set([...gifts]);
    
    return [...uniqueGifts].sort((a, b) => a - b);
}