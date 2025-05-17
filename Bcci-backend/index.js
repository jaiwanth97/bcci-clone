const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/cricket_roster', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Player Schema
const playerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    role: { type: String, required: true },
    battingStyle: String,
    bowlingStyle: String,
    nationality: String,
    team: { type: String, required: true },
    jerseyNumber: String,
    imageUrl: String,
    createdAt: { type: Date, default: Date.now }
});

const Player = mongoose.model('Player', playerSchema);

// Routes

// Get all players
app.get('/api/players', async (req, res) => {
    try {
        const players = await Player.find().sort({ createdAt: -1 });
        res.json(players);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new player
app.post('/api/players', async (req, res) => {
    try {
        const player = new Player(req.body);
        const savedPlayer = await player.save();
        res.status(201).json(savedPlayer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a player
app.delete('/api/players/:id', async (req, res) => {
    try {
        const player = await Player.findByIdAndDelete(req.params.id);
        if (!player) {
            return res.status(404).json({ message: 'Player not found' });
        }
        res.json({ message: 'Player deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a player by ID
app.get('/api/players/:id', async (req, res) => {
    try {
        const player = await Player.findById(req.params.id);
        if (!player) {
            return res.status(404).json({ message: 'Player not found' });
        }
        res.json(player);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a player
app.put('/api/players/:id', async (req, res) => {
    try {
        const player = await Player.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true }
        );
        
        if (!player) {
            return res.status(404).json({ message: 'Player not found' });
        }
        
        res.json(player);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});