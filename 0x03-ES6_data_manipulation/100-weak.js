/**
 * map of endpoints
 */
export const weakMap = new WeakMap();

/**
 * max of endpoints
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * trackers for the endpoints
 * @param {{
 *   protocol: String,
 *   name: String,
 * }} endpoint - The endpoint to make a request to.
 * @author Ogundimu Ajibade
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
