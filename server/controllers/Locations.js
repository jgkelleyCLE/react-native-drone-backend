import Location from "../models/LocationsModel.js";

export const getAllLocations = async(req, res) => {

    try {
        
        const locations = await Location.find()
        res.status(200).json(locations)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}

export const getLocation = async(req, res) => {

    const id = req.params.id

    try {
        
        const location = await Location.findById(id)
        res.status(200).json(location)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}

export const searchLocations = async(req, res) => {

    try {
        
        const results = await Location.aggregate(
            [
                {
                  $search: {
                    index: "drone",
                    text: {
                      query: req.params.key,
                      path: {
                        wildcard: "*"
                      }
                    }
                  }
                }
              ]
        )
        res.status(200).json(results)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}