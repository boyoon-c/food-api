import { Router } from 'express'
import * as foodsCtrl from '../controllers/foods.js'
const router = Router()
export {
    router
}

router.get('/foods', foodsCtrl.index)
router.get('/foods/:id', foodsCtrl.show)
router.post('/foods', foodsCtrl.create)
router.put('/foods/:id', foodsCtrl.update)
router.delete('/foods/:id', foodsCtrl.delete)