
export const updatePassword = (password: string = ""):object => {
    return {
        type: "UPDATE_PASSWORD",
        payload: password
    };
};

//#region counterActions

/**
 * increment()
 * Purpose: to tell the reducer to increment by parameter amount
 * Parameters:
 *      number - number to increment count state by
 * return: 
 *      type - action type of increment
 *      payload - number to increment the state by
 */
export const increment = (amount: number = 1): object => {
    return {
        type: "INCREMENT",
        payload: amount
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
export const decrement = (amount: number = 1) => {
    return {
        type: "DECREMENT",
        payload: amount
    };
}; // End decrement()

/**
 * updateCounter()
 * Purpose: to Tell The Reducer To Update counter with parameter amount
 * Parameters:
 *      number - number to update counter state by
 * return: 
 *      type - action type of increment
 *      payload - number to increment the state by
 */
export const updateCounter = (amount: number = 1) => {
    return {
        type: "UPDATE",
        payload: amount
    };
}; // End updateCounter()

//#endregion counterActions

//#region timerActions

/**
 * updateCounter()
 * Purpose: to Tell The Reducer To Update counter with parameter amount
 * Parameters:
 *      number - number to update counter state by
 * return: 
 *      type - action type of increment
 *       payload - number to increment the state by
 */
export const updateSeconds = (time:number): object => {
    return {
        type: "UPDATE_SECONDS",
        payload: time
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
export const updateMinutes = (time:number): object => {
    return {
        type: "UPDATE_MINUTES",
        payload: time
    };
}; // End updateMinutes()

/**
 * decreaseSeconds()
 * Purpose: to Tell The Reducer To decrease seconds
 * Parameters:
 *      NONE
 * return: 
 *      type - action type of increment
 *      payload - null
 */
export const decreaseSeconds = (): object => {
    return {
        type: "DECREASE_SECONDS",
        payload: 1
    }
}; // End decreaseSeconds()

/**
 * decreaseMinutes()
 * Purpose: to Tell The Reducer To decrease minutes
 * Parameters:
 *      NONE
 * return: 
 *      type - action type of increment
 *      payload - null
 */
export const decreaseMinutes = (): object => {
    return {
        type: "DECREASE_MINUTES",
        payload: 1
    }
}; // End decreaseMinutes()

//#endregion timerActions

//#region weatherActions

/**
 * updateSearch()
 * Purpose: to Tell The Reducer To Update search with parameter value
 * Parameters:
 *      city - city name to update search with
 * return: 
 *      type - action type of increment
 *      payload - name of the city to update search with
 */
export const updateWeatherSearch = (city: string) => {
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
export const updateWeatherResults = (results: object) => {
    return {
        type: 'UPDATE_WEATHER_RESULTS',
        payload: results
    };
}; // End updateWeatherResults()

//#endregion weatherActions

//#region globalActions

export const updateDate = (date: Date = new Date()):object => {
    return {
        type: "UPDATE_DATE",
        payload: date
    };
};

export const updatePath = (path: string = "/"):object => {
    return {
        type: "UPDATE_PATH",
        payload: path
    }
};

//#endregion globalActions
