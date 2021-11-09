import express from 'express'

import { getFacturations, createFacturation, updateFacture } from '../controllers/facturations.js'

const router = express.Router()

router.get('/', getFacturations)
router.post('/', createFacturation)
router.patch('/:id', updateFacture)


export default router