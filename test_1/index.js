"use strict";

/**
 * The `test_data.json` contains an object array of "The Simpsons" characters and their catchphrase. This function
 * will add a new property `example` to each object that is a combining the `first_name`, `last_name`, and
 * `catchphrase` properties into a new sentence.
 *
 * The new sentence should read like "Homer Simpson says Doh!".  See the `expected_output.json` file for the
 * expected results of this.
 *
 * @returns  {Object[]}
 */
module.exports = function test1() {
  //Import JSON array from file
  let dataJson = require('./test_data.json');
  //Add 'example' property for each individual object
  dataJson.forEach((object, index) => dataJson[index].example = `${object.first_name} ${object.last_name} says ${object.catchphrase}`);

  return dataJson;
};
