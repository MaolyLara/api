import { Router } from 'express'
import UserController from './controllers/UserController'

const router = Router()

router.use((req, res, next) => {
    console.log(req.method, req.url, res.statusCode)
    next()
})

router.get('/users', UserController.index)
router.get('/users/:id', UserController.findById)
router.post('/users', UserController.create)
router.put('/users/:id', UserController.update)
router.delete('/users/:id', UserController.delete)

export default router