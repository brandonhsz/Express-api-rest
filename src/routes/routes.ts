import {Router} from 'express'
import {helloController} from '../controllers'

export const router = Router();

router.get('/', helloController)



