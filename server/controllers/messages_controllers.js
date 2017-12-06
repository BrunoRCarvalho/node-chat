const messages = []
let id = 0

const create = (req, res) => {
  const { text, time } = req.body
  messages.push({ id, text, time })
  id++;
  console.log(req.body);
  res.status(200).json(messages)
}

const read = (req, res) => {
  res.status(200).send(messages)
}

const update = (req, res) => {
  const updateID = req.params.id
  let index = messages.findIndex(message => message.id == updateID)
  messages[index] = {
    id: messages[index].id,
    text: req.body.text || messages[index].text,
    time: req.body.time || messages[index].time
  }
  return res.status(200).send(messages)
}

const destroy = (req, res) => {
  const ID = req.params.id
  let index = messages.findIndex(message => message.id == ID)
  messages.splice(index, 1)
  res.status(200).send(messages)
}

module.exports = {
  create,
  read,
  update,
  destroy
}
