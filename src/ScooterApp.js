const Scooter = require("./Scooter")
const User = require("./User")

class ScooterApp {
constructor () {
  this.station = {
    'Seaforth' : [],
    'Lime Street' : [],
    'Formby' : []
  }
  this.registeredUsers = {}
}

registerUser(username, password, age) {
  if (this.registeredUsers[username]) {
    throw new Error('Already registered')
  } if (age < 18) {
    throw new Error('Too young to register')
  }
  const user = new User(username, password, age);
  this.registeredUsers[username] = user;
  console.log(`${username} has been registered.`);
  return user;
}

loginUser(username, password) {
  User.login(password)
  if (true)
    console.log(`${username} has been logged in.`);
  if (!User || User.password !== password) {
    throw new Error('Username or password is incorrect.');
  }
}
}

module.exports = ScooterApp
