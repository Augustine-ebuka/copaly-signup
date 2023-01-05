const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('../copaly-signup'));

app.get('/', (req, res) => { 
    res.sendFile(__dirname + 'index.html');
    
        
})

const port = 5000
app.listen(port, () => {
  console.log(`listening on ${port}`);  
})