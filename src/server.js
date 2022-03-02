const express = require('express')
const app = express()
const {PORT, pool} = require('./config')
const cors = require('cors')
const mailer = require('./mail/nodemailer')

app.use(express.json())
app.use(cors())




app.get('/restaurant', async(req, res) => {
   const {role} = req.query;
   const client = await pool.connect();

   
   
   if(role) {
       const {rows} = await client.query('SELECT * FROM restaurant WHERE restaurant_author = $1', [role]);
       
       if(!rows.length) {
           return res.send('Restaurant does not exists')
        }
        
        return res.send(rows)
    }
    const {rows} = await client.query('SELECT * FROM restaurant');
    
    await client.release()
  
    res.send(rows)
})

app.get('/product', async(req, res) => {
    const client = await pool.connect()

    const {rows} = await client.query('SELECT * FROM product');

    await client.release()

    res.send(rows)
})

app.post('/zakaz', (req, res) => {
    try {
        const {email} = req.body;
        mailer(email)

        res.send('zakaz tayyor')
    }catch (e) {
        console.log(e)
    }
})

app.listen(PORT, console.log(`SERVER RUN PORT ${PORT}`));