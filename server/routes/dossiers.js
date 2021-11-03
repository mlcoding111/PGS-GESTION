import express from 'express'

import { getDossiers, createDossier } from '../controllers/dossiers.js'

const router = express.Router()

router.get('/', getDossiers)
router.post('/', createDossier)


export default router