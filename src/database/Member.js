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


module.exports = {
  getAllMembers
}