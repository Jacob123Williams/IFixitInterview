const baseURL = "https://www.ifixit.com/api/2.0/";
const headers = new Headers();
let cookie;

headers.set('Content-Type', 'application/json');

const reqConf = {
   headers: headers,        // Indicate JSON content type
   credentials: 'include',  // Send cookies
}

// Fetch call that posts a server connect error on general fetch failure.
function safeFetch(endpoint, body) {
   return fetch(endpoint, body)
   .catch(err => Promise.reject(["Server connect error"]))
}


// Helper functions for the comon request types
/**
 * make a post request
 * @param {string} endpoint
 * @param {Object} body
 * @returns {Promise}
 */
export function post(endpoint, body) {
    return safeFetch(baseURL + endpoint, {
        method: 'POST',
        body: JSON.stringify(body),
        ...reqConf
    });
}

/**
 * make a put request
 * @param {string} endpoint
 * @param {Object} body
 * @returns {Promise}
 */
export function put(endpoint, body) {
    return safeFetch(baseURL + endpoint, {
        method: 'PUT',
        body: JSON.stringify(body),
        ...reqConf
    })
}

/**
 * make a patch request
 * @param {string} endpoint
 * @param {Object} body
 * @returns {Promise}
 */
export function patch(endpoint, body) {
    return safeFetch(baseURL + endpoint, {
        method: 'PATCH',
        body: JSON.stringify(body),
        ...reqConf
    })
}

/**
 * make a get request
 * @param {string} endpoint
 * @returns {Promise}
 */
export function get(endpoint) {
   return safeFetch(baseURL + endpoint, {
      method: 'GET',
      ...reqConf
    })
}

export function del(endpoint) {
   return safeFetch(baseURL + endpoint, {
      method: 'DELETE',
      ...reqConf
   })
}
