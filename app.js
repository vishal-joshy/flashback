module.exports = function createObject(initialValue) {
  const history = [{... initialValue }];
  const obj = Object.create({add,remove,revert});
  obj.current = initialValue;
  obj.history = history;
  return obj;
}

/**
 * Add value to current property of object
 * @param {string} key
 * @param {*} value
 */
function add(key, value) {
  this.current[key] = value;
  this.history.push({ ...this.current });
}

/**
 * Remove property from object
 * @param {*} key
 */
function remove(key) {
  delete this.current[key];
  this.history.push({ ...this.current });
}

/**
 * Revert current object to previous state based on index
 * @param {number} index
 */
function revert(index) {
  this.current = { ...this.history[index] };
}
