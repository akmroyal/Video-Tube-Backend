import dotenv from 'dotenv'
import connectToDB from './db/dbConnect.js'
import app from './app.js'

dotenv.config({
    path: '/env'  // if giving prob try "./.env"
})

connectToDB()
    .then(() => {
        app.get('/api/v1',(req,res) => {
            res.send('Hello from server')
            //  http://localhost:3000/api/v1/ Backend home page
        })
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is listening on: ${process.env.PORT}`);
        })
    })
    .catch((error) => console.log("MONGODB connection failed!!!: ", error))