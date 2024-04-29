const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

function getMostSkilledUser(users) {
  let userWithMostSkills
  let maxSkills = 0

  for (const user in users) {
    if (users.hasOwnProperty(user)) {
      const numSkills = users[user].skills.length
      if (numSkills > maxSkills) {
        maxSkills = numSkills
        userWithMostSkills = user
      }
    }
  }

  return userWithMostSkills
}

console.log(getMostSkilledUser(users))

function countLoggedInUsers(users) {
  let usersLoggedIn = 0

  for (const user in users) {
    if (users.hasOwnProperty(user)) {
      const isLoggedIn = users[user].isLoggedIn
      if (isLoggedIn) {
        usersLoggedIn += 1
      }
    }
  }

  return usersLoggedIn
}

console.log(countLoggedInUsers(users))

function countUsersWithMoreThanSpecificPoints(users) {
  const specifiedPoints = 50
  let usersWithSpecificPoints = 0

  for (const user in users) {
    if (users.hasOwnProperty(user)) {
      const points = users[user].points
      if (points >= specifiedPoints) {
        usersWithSpecificPoints += 1
      }
    }
  }

  return usersWithSpecificPoints
}

console.log(countUsersWithMoreThanSpecificPoints(users))

/** MERN STACK:
 * Express
 * Node
 * React
 * MongoDB
 * 
 * */

function getUsersWithMernStack(users) {
  let usersWithMern = []
  
  for (const user in users) {
    if (users.hasOwnProperty(user)) {
      const MernStackUser = users[user].skills.includes("Express" && "Node" && "React" && "MongoDB")
      if (MernStackUser) {
        usersWithMern.push(user)
      }
    }
  }

  return usersWithMern
}

console.log(getUsersWithMernStack(users))

const me = Object.create(users)

me.name = 'JaniBT'

console.log(me)