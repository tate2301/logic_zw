var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '987081',
  key: 'd6576a810811e3713a50',
  secret: 'b74ddb01b3a8c63212f5',
  cluster: 'mt1',
  encrypted: true
});

module.exports = pusher