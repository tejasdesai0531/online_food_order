import express, { Request, Response} from 'express'

const router = express.Router()

router.get('/restaurant/dishes', async (req: Request, res: Response) => {
    res.status(201).send("get dishes")
})

export { router as indexDishRouter }