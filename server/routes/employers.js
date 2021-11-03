import express from 'express'

import { getEmployers, createEmployer } from '../controllers/employers.js'

const router = express.Router()

router.get('/', getEmployers)
router.post('/', createEmployer)


export default router