const memberService = require('../services/memberService')

const getAllMembers = (req, res) => {
  try {
    const allMembers = memberService.getAllMembers()
    res.status(200).send({
      status: 'OK',
      data: allMembers
    })
  } catch (err) {
    res.status(err?.status || 500).send({
      status: 'FAILED',
      data: { error: err?.message || err }
    })
  }
}


module.exports = {
  getAllMembers
}