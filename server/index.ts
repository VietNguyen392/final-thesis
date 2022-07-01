import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import { initWebRoute } from './routes'
import dotenv from'dotenv'
dotenv.config()
const app=express()
app.use(bodyParser.json({limit:'50mb'}))
app.use(bodyParser.urlencoded({extended:false,limit:'50mb'}))
app.use(cors())
app.use(cookieParser())
app.use(morgan('dev'))
initWebRoute(app)
import './config/database'
var port =process.env.PORT||3030
app.listen(port,()=>{
    console.log('🚀server is run on port ',port);
})