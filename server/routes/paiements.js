import express from 'express'

import { getPaiements, createPaiement } from '../controllers/paiements.js'

const router = express.Router()

router.get('/', getPaiements)
router.post('/', createPaiement)


export default router