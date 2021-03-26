let handler = function (m) {
  this.sendContact(m.chat, 'Anonimo', 'Frz', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
