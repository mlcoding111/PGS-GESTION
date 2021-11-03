import express from 'express'

import { getFacturations, createFacturation } from '../controllers/facturations.js'

const router = express.Router()

router.get('/', getFacturations)
router.post('/', createFacturation)


export default router