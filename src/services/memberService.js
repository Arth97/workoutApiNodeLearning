const Member = require('../database/Member')

const getAllMembers = () => {
  try {
    return Member.getAllMembers()
  } catch (err) {
    throw err;
  }
}

const getMemberByName = (name) => {
  try {
    return Member.getMemberByName(name)
  } catch (err) {
    throw err;
  }
} 

const getMemberByEmail = (email) => {
  try {
    return Member.getMemberByEmail(email)
  } catch (err) {
    throw err;
  }
} 

module.exports = {
  getAllMembers,
  getMemberByName,
  getMemberByEmail
}