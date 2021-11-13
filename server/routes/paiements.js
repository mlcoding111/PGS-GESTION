import express from 'express'

import { getPaiements, createPaiement, updatePaiement, deletePaiements } from '../controllers/paiements.js'

const router = express.Router()

router.get('/', getPaiements)
router.post('/', createPaiement)
router.patch('/:id', updatePaiement)
router.delete('/', deletePaiements)


export default router