import express, { Request, Response } from 'express';
import { validateRequest } from '@tdfoodorder/common';
import { body, check, validationResult } from 'express-validator';

const router = express.Router();

router.post(
    '/restaurant', 
    [
        body('name').not().isEmpty().withMessage('Restaurant name is required'),
        body('cousines').isArray().withMessage("Required array of strings"),
        check('cousines.*').isString().trim().isLength({ max: 15 }),
        body('location.latitude').custom(lat => lat >= -90 && lat <= 90 ).withMessage('Invalid latitude'),
        body('location.langitude').custom(long => long >= -180 && long <= 180).withMessage('Invalid logitude')
    ],
    // validateRequest,
    async (req: Request, res: Response) => {

        res.send("HII")
    
    }
)

export { router as newRestaurantRouter };