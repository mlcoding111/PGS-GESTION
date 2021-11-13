import express from 'express'

import { getDossiers, createDossier, updateDossier, deleteDossier } from '../controllers/dossiers.js'

const router = express.Router()

router.get('/', getDossiers)
router.post('/', createDossier)
router.patch('/:id', updateDossier)
router.delete('/', deleteDossier)


export default router