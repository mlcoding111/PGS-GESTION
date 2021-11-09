import express from 'express'

import { getPaiements, createPaiement, updatePaiement } from '../controllers/paiements.js'

const router = express.Router()

router.get('/', getPaiements)
router.post('/', createPaiement)
router.patch('/:id', updatePaiement)


export default router