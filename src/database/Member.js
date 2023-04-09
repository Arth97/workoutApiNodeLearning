const DB = require('./db.json')
const { saveToDatabase } = require('./utils')

const getAllMembers = () => {
  try {
    return DB.members;
  } catch (err) {
    throw {
      status: 500,
      message: err?.message || err
    }
  }
}

const getMemberByName = (name) => {
  try {
    const member =  DB.members.find(member => member.name == name);
    
    if (!member) {
      throw {
        status: 400,
        message: `Cant't find member with name '${name}'`
      }
    }
    return member;

  } catch (err) {
    throw {
      status: 500,
      message: err?.message || err
    }
  }
}

module.exports = {
  getAllMembers,
  getMemberByName
}