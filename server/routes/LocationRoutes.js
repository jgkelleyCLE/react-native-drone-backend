import express from 'express'
import { getAllLocations, getLocation } from '../controllers/Locations.js'

const router = express.Router()


//GET LOCATIONS
router.get('/', getAllLocations)

//GET LOCATION
router.get('/:id', getLocation)

export default router;