/**
 * increment()
 * Purpose: to tell the reducer to increment by parameter amount
 * Parameters:
 *      number - number to increment count state by
 * return: 
 *      type - action type of increment
 *      payload - number to increment the state by
 */
export const increment = (number) => {
    return {
        type: 'INCREMENT',
        payload: number
    };
}; // End increment()

/**
 * decrement()
 * Purpose: to tell the reducer to decrement by parameter amount
 * Parameters:
 *      number - number to increment count state by
 * return: 
 *      type - action type of decrement
 *      payload - number to decrement the state by
 */
export const decrement = (number) => {
    return {
        type: 'DECREMENT',
        payload: number
    };
}; // End decrement 

/**
 * updateCounter()
 * Purpose: to Tell The Reducer To Update counter with parameter amount
 * Parameters:
 *      number - number to update counter state by
 * return: 
 *      type - action type of increment
 *       payload - number to increment the state by
 */
export const updateCounter = (number) => {
    return {
        type: 'UPDATE',
        payload: number
    };
}; // End updateCounter()

/**
 * updateTimer()
 * Purpose: to Tell The Reducer To Update timerItem with parameter amount
 * Parameters:
 *      number - number to update timer state by
 * return: 
 *       type - action type of increment
 *       payload - number to update the timer state by
 */
export const updateTimer = (time) => {
    return {
        type: 'UPDATE',
        payload: time
    };
}; // End updateTimer()