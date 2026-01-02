const express = require('express')
const cors =require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

//middleware
app.use(cors({
  origin:[
        'http://localhost:5173',
"https://safe-bangladesh-org.web.app/"
  ],
  Credential:true,
}
))
app.use(express.json());




app.get('/', (req, res) => {
  res.send('This is Safe Bangladesh Organization server is running!')
})

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`)
})