import express,{Express,Request,Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app:Express = express();
const port:number|string = process.env.PORT || 8000;

app.get('/',(req:Request,res:Response)=>{
    res.send('HOLA MUNDO LOC4O');
})

app.listen(port);