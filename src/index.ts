import express,{Express,Request,Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app:Express = express();
const port:number|string = process.env.PORT || 8000;

app.get('/',(req:Request,res:Response)=>{
    res.status(200).json({"data":{"message": "Goodbye, world"} });
})
app.get('/hello/:name',(req:Request,res:Response)=>{
    res.status(200).json({"data":{"message": "Hola "+req.params.name} });
})

app.listen(port);