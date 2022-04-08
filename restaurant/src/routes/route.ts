import express from 'express'


import { indexRestaurantRouter } from '../routes/restaurant/index'
import { newRestaurantRouter } from '../routes/restaurant/new'

import { indexDishRouter } from './dishes'
import { indexCategoryRouter } from './categories'

const router = express.Router()

// restaurant routes
router.use(indexRestaurantRouter)
router.use(newRestaurantRouter)

//categories routes
router.use(indexCategoryRouter)

// dishes routes
router.use(indexDishRouter)

export { router as apiRouter }
