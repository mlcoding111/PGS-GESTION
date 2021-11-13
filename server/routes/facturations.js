import express from 'express'

import { getFacturations, createFacturation, updateFacture, deleteFacturations } from '../controllers/facturations.js'

const router = express.Router()

router.get('/', getFacturations)
router.post('/', createFacturation)
router.patch('/:id', updateFacture)
router.delete('/', deleteFacturations)


export default router