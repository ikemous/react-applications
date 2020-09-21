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


export const updateMinutes = (time) => {
    return {
        type: 'UPDATE_MINUTES',
        payload: time
    };
}; // End updateTimer()

export const decreaseMinutes = () => {
    return {
        type: 'DECREASE_MINUTES',
        payload: null
    };
}; // End updateTimer()


export const updateSeconds = (time) => {
    return {
        type: 'UPDATE_SECONDS',
        payload: time
    };
}; // End updateSeconds()

export const decreaseSeconds = () => {
    return {
        type: 'DECREASE_SECONDS',
        payload: null
    };
}; // End updateTimer()

export const updateSearch = (city) => {
    return {
        type: 'UPDATE_SEARCH',
        payload: city
    };
}; // End updateSeconds()

export const updateWeatherResults = (results) => {
    return {
        type: 'UPDATE_WEATHER_RESULTS',
        payload: results
    };
}; // End updateTimer()
