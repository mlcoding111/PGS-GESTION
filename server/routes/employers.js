import express from 'express'

import { getEmployers, createEmployer, updateEmployer} from '../controllers/employers.js'

const router = express.Router()

router.get('/', getEmployers)
router.post('/', createEmployer)
router.patch('/:id', updateEmployer)


export default router