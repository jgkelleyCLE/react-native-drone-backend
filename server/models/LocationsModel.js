import mongoose from 'mongoose'

const LocationSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    long: {
        type: Number,
        required: true
    },
    images: [
        {
            public_id: {
                type: String,
                required: false
            },
            url: {
                type: String,
                required: false
            }
        }
    ],
    video: {
        type: String,
        required: false,
        default: ''
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    userName: {
        type: String,
        required: false
    }

}, { timestamps: true })

const Location = mongoose.model('location', LocationSchema)

export default Location