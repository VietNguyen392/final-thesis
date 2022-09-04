import {Request, Response} from 'express';
import Schedules from '../models/Schedule';
const timeAPI={
    createTime:async(req:Request,res:Response)=>{
        try {
            const {time,date,doctorID}=req.body
            const time_id=await Schedules.create({
                time,
                date,
                doctorID
            })
            res.send(time_id)
        } catch (e) {
            res.status(500).send({ msg: "Internal Server Error" });
            console.log(e);
        }
    }
}
export default timeAPI