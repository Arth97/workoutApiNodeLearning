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

const getMemberByName = (req, res) => {
  const {
    params: { name }
  } = req
  
  if(!name) {
    res.status(400).send({
      status: 'FAILED',
      data: { error: 'The following parameter empty or missing: name' }
    })
    return;
  }

  try {
    const member = memberService.getMemberByName(name)
    res.status(200).send({
      status: 'OK',
      data: member
    })
  } catch (err) {
    res.status(err?.status || 500).send({
      status: 'FAILED',
      data: { error: err?.message || err }
    })
  }
}


module.exports = {
  getAllMembers,
  getMemberByName
}