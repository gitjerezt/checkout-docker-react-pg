const express = require('express');
const app = express();
var cors = require('cors');
const knex = require('knex')(require('./knexfile.js').development);

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/students', function(req, res) {
  console.log(knex);
 knex
   .select('*')
   .from('students')
   .then(data => res.status(200).json(data))
   .catch(err =>
     res.status(404).json({
       message:
         'The data you are looking for could not be found. Please try again'
     })
   );
});

app.get('/', (req, res) => {
 res.send('Hello World! Use /students endpoint for data!')
})



module.exports = app;

