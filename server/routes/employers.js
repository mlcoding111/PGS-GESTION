import express from 'express'

import { getEmployers, createEmployer, updateEmployer, deleteEmployers} from '../controllers/employers.js'

const router = express.Router()

router.get('/', getEmployers)
router.post('/', createEmployer)
router.patch('/:id', updateEmployer)
router.delete('/', deleteEmployers)


export default router