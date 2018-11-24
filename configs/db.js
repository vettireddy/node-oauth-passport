const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
mongoose.connection.on('error', function (err) {
  console.error(err.message);
});
mongoose.connection.on('connecting', function() {
  console.log('Establishing a connection to MongoDB...')
});
mongoose.connection.on('connected', function () {
  console.log('Connected to MongoDB Successfully...');
})
