// libraryRoutes.js

const express = require('express');
const router = express.Router();
const LibraryItem = require('../Models/Library');

const getLibraryCount = async () => {
    return await LibraryItem.countDocuments();
};

// GET all library items
router.get('/get', async (req, res) => {
    try {
        const libraryItems = await LibraryItem.find();
        res.json(libraryItems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET a specific library item
router.get('/get/:id', getLibraryItem, (req, res) => {
    res.json(res.libraryItem);
});

// POST a new library item
router.post('/add', async (req, res) => {
    const libraryItem = new LibraryItem(req.body);

    try {
        const newLibraryItem = await libraryItem.save();
        res.status(201).json(newLibraryItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT update a library item
router.put('/update/:id', async (req, res) => {
    try {
        const library = await LibraryItem.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!library) {
            return res.status(404).send({ error: 'HomeWork not found' });
        }
        res.status(200).send(library);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// DELETE a library item


router.delete('/delete/:id', async (req, res) => {
    try {
        const library = await LibraryItem.findByIdAndDelete(req.params.id);
        if (!library) {
            return res.status(404).send();
        }
        const count = await getLibraryCount();
        res.json({ library, count });
    } catch (e) {
        res.status(500).send(e);
    }
});

async function getLibraryItem(req, res, next) {
    try {
        const libraryItem = await LibraryItem.findById(req.params.id);
        if (libraryItem == null) {
            return res.status(404).json({ message: 'Cannot find library item' });
        }
        res.libraryItem = libraryItem;
        next();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

module.exports = router;
