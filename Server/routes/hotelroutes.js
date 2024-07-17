const express = require('express');
const router = express.Router();
const Hotel = require('../Models/Hotel'); // Adjust the path as necessary

const getHotelCount = async () => {
    return await Hotel.countDocuments();
};
// Add a new hotel
router.post('/add', async (req, res) => {
    try {
        const hotel = new Hotel(req.body);
        await hotel.save();
        res.status(201).send(hotel);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all hotels
router.get('/get', async (req, res) => {
    try {
        const hotels = await Hotel.find({});
        const count = await getHotelCount();
        res.status(200).send({ hotels, count });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get a hotel by ID
router.get('/get/:id', async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        if (!hotel) {
            return res.status(404).send();
        }
        res.status(200).send(hotel);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update a hotel by ID
router.put('/update/:id', async (req, res) => {
    try {
        const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!hotel) {
            return res.status(404).send();
        }
        res.status(200).send(hotel);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete a hotel by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const hotel = await Hotel.findByIdAndDelete(req.params.id);
        if (!hotel) {
            return res.status(404).send();
        }
        res.status(200).send(hotel);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
