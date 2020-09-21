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
 * updateMinutes()
 * Purpose: to Tell The Reducer To Update minutes with parameter amount
 * Parameters:
 *      time - amount of minutes to update the state with
 * return: 
 *      type - action type of increment
 *      payload - number to update the state by
 */
export const updateMinutes = (time) => {
    return {
        type: 'UPDATE_MINUTES',
        payload: time
    };
}; // End updateMinutes()

/**
 * decreaseMinutes()
 * Purpose: to Tell The Reducer To decrease minutes
 * Parameters:
 *      NONE
 * return: 
 *      type - action type of increment
 *      payload - null
 */
export const decreaseMinutes = () => {
    return {
        type: 'DECREASE_MINUTES',
        payload: null
    };
}; // End updateTimer()

/**
 * updateSeconds()
 * Purpose: to Tell The Reducer To Update seconds with parameter amount
 * Parameters:
 *      time - amount of seconds to update the state with
 * return: 
 *      type - action type of increment
 *      payload - number to update the state by
 */
export const updateSeconds = (time) => {
    return {
        type: 'UPDATE_SECONDS',
        payload: time
    };
}; // End updateSeconds()

/**
 * decreaseSeconds()
 * Purpose: to Tell The Reducer To decrease seconds
 * Parameters:
 *      NONE
 * return: 
 *      type - action type of increment
 *      payload - null
 */
export const decreaseSeconds = () => {
    return {
        type: 'DECREASE_SECONDS',
        payload: null
    };
}; // End decreaseSeconds()

/**
 * updateSearch()
 * Purpose: to Tell The Reducer To Update search with parameter value
 * Parameters:
 *      city - city name to update search with
 * return: 
 *      type - action type of increment
 *      payload - name of the city to update search with
 */
export const updateSearch = (city) => {
    return {
        type: 'UPDATE_SEARCH',
        payload: city
    };
}; // End updateSearch()

/**
 * updateWeatherResults()
 * Purpose: to Tell The Reducer To Update weather results with parameter obj
 * Parameters:
 *      results - object to hold all weather information
 * return: 
 *      type - action type of increment
 *      payload - results to update the state with
 */
export const updateWeatherResults = (results) => {
    return {
        type: 'UPDATE_WEATHER_RESULTS',
        payload: results
    };
}; // End updateWeatherResults()
