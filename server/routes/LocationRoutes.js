import express from 'express'
import { getAllLocations, getLocation, searchLocations } from '../controllers/Locations.js'

const router = express.Router()


//GET LOCATIONS
router.get('/', getAllLocations)

//GET LOCATION
router.get('/:id', getLocation)

//SEARCH LOCATIONS
router.get('/search/:key', searchLocations)

export default router;