// entry point here
import { Response, NextFunction } from 'express'
import Users from '../models/User'
import jwt from 'jsonwebtoken'
import { IDecodedToken, IReqAuth } from '../utils'
const auth = async (req: IReqAuth, res: Response, next: NextFunction) => {
    try {
        const token = req.header("Authorization")
        if (!token) return res.status(400).send({ msg: 'Invalid' })
        const decoded = <IDecodedToken>jwt.verify(token, `${process.env.ACCESS_TOKEN_SECRET}`)
        if (!decoded) return res.status(400).send({ msg: 'Invalid' })
        const user = await Users.findOne({ _id: decoded.id }).select('-password')
        if (!user) return res.status(400).json({ msg: "User does not exist." })
        req.user = user;
        next()

    } catch (error: any) {
        return res.status(500).send({ msg: error.message })

    }
}
export default auth