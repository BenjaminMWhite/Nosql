const { connect, connection } = require('mongoose');

connect('mongodb+srv://BenjaminMWhite:U8zbzPnBb88.Qmv@cluster0.7xorh.mongodb.net/test?authSource=admin&replicaSet=atlas-3p0y9u-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
