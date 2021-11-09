import express from 'express'

import { getDossiers, createDossier, updateDossier } from '../controllers/dossiers.js'

const router = express.Router()

router.get('/', getDossiers)
router.post('/', createDossier)
router.patch('/:id', updateDossier)


export default router