const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('../frontend'));

// Routes

// GET all portfolio items
app.get('/api/portfolio', (req, res) => {
    const sql = 'SELECT * FROM portfolio ORDER BY created_at DESC';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching portfolio items:', err);
            return res.status(500).json({ error: 'Failed to fetch portfolio items' });
        }
        res.json(results);
    });
});

// GET single portfolio item by ID
app.get('/api/portfolio/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM portfolio WHERE id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error('Error fetching portfolio item:', err);
            return res.status(500).json({ error: 'Failed to fetch portfolio item' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Portfolio item not found' });
        }
        res.json(results[0]);
    });
});

// POST create new portfolio item
app.post('/api/portfolio', (req, res) => {
    const { owner_name, email, profession, skills, bio, website_url } = req.body;
   
    if (!owner_name || !email || !profession || !skills) {
        return res.status(400).json({ error: 'Missing required fields: owner_name, email, profession, skills' });
    }

    const sql = 'INSERT INTO portfolio (owner_name, email, profession, skills, bio, website_url) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [owner_name, email, profession, skills, bio, website_url], (err, results) => {
        if (err) {
            console.error('Error creating portfolio item:', err);
            return res.status(500).json({ error: 'Failed to create portfolio item' });
        }
        res.status(201).json({
            id: results.insertId,
            message: 'Portfolio item created successfully',
            item: { owner_name, email, profession, skills, bio, website_url }
        });
    });
});

// PUT update portfolio item
app.put('/api/portfolio/:id', (req, res) => {
    const { id } = req.params;
    const { owner_name, email, profession, skills, bio, website_url } = req.body;
   
    if (!owner_name || !email || !profession || !skills) {
        return res.status(400).json({ error: 'Missing required fields: owner_name, email, profession, skills' });
    }

    const sql = 'UPDATE portfolio SET owner_name = ?, email = ?, profession = ?, skills = ?, bio = ?, website_url = ? WHERE id = ?';
    db.query(sql, [owner_name, email, profession, skills, bio, website_url, id], (err, results) => {
        if (err) {
            console.error('Error updating portfolio item:', err);
            return res.status(500).json({ error: 'Failed to update portfolio item' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Portfolio item not found' });
        }
        res.json({ message: 'Portfolio item updated successfully' });
    });
});

// DELETE portfolio item
app.delete('/api/portfolio/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM portfolio WHERE id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error('Error deleting portfolio item:', err);
            return res.status(500).json({ error: 'Failed to delete portfolio item' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Portfolio item not found' });
        }
        res.json({ message: 'Portfolio item deleted successfully' });
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});