// libraryRoutes.js

const express = require('express');
const router = express.Router();
const LibraryItem = require('../Models/Library');

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
router.put('/put/:id', getLibraryItem, async (req, res) => {
    if (req.body.srNo != null) {
        res.libraryItem.srNo = req.body.srNo;
    }
    if (req.body.title != null) {
        res.libraryItem.title = req.body.title;
    }
    if (req.body.type != null) {
        res.libraryItem.type = req.body.type;
    }
    if (req.body.subject != null) {
        res.libraryItem.subject = req.body.subject;
    }
    if (req.body.class != null) {
        res.libraryItem.class = req.body.class;
    }
    if (req.body.authorName != null) {
        res.libraryItem.authorName = req.body.authorName;
    }
    if (req.body.description != null) {
        res.libraryItem.description = req.body.description;
    }

    try {
        const updatedLibraryItem = await res.libraryItem.save();
        res.json(updatedLibraryItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE a library item
router.delete('/delete/:id', getLibraryItem, async (req, res) => {
    try {
        await res.libraryItem.remove();
        res.json({ message: 'Deleted library item' });
    } catch (err) {
        res.status(500).json({ message: err.message });
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
