const Record = require('../database/Member')

const getAllMembers = () => {
  try {
    return Record.getAllMembers()
  } catch (err) {
    throw err;
  }
}


module.exports = {
  getAllMembers
}