import express, { Request, Response } from 'express';
import { requireAuth } from '@tdfoodorder/common';

const router = express.Router();

router.get('/restaurant', requireAuth, async (req: Request, res: Response) => {
    return res.send("HII")
})

export { router as indexRestaurantRouter };