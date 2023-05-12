const faker = require("faker");
const randomNumberGenrator = require("./random-number-generator");

/**
 * a function that can generate a fake person profile including first name,
 * last name, email, avatar, age and address. User can pass an array of selected
 * properties and it will return a person object containing only given properties.
 * Ex: generatePerson([’firstName’, ‘lastName’, ‘email’])
 * 
 * @param {object} props
 * @returns {object}
 */
module.exports = function generateFakePerson(props) {
  const fakeDataGenerators = {
    firstName: faker.name.firstName,
    lastName: faker.name.lastName,
    email: faker.internet.email,
    avatar: faker.image.avatar,
    age: () => randomNumberGenrator(12, 60),
    address: () =>
      `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()}`,
  };
  const fakePerson = {};
  props ??= Object.keys(fakeDataGenerators);
  for (let prop of props) {
    if (prop in fakeDataGenerators) {
      fakePerson[prop] = fakeDataGenerators[prop]();
    }
  }
  return fakePerson;
}