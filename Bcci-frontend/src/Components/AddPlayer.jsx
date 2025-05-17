import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddPlayer.css";

const API_URL = "http://localhost:5000/api";

const AddPlayer = () => {
    const navigate = useNavigate();
    const [playerData, setPlayerData] = useState({
        name: "",
        age: "",
        role: "",
        battingStyle: "",
        bowlingStyle: "",
        nationality: "",
        team: "",
        jerseyNumber: "",
        imageUrl: ""
    });
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPlayerData({
            ...playerData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Simple validation
        if (!playerData.name || !playerData.role || !playerData.team) {
            setErrorMessage("Please fill all required fields");
            setSuccessMessage("");
            return;
        }

        setIsLoading(true);
        try {
            // Send data to the API
            const response = await axios.post(`${API_URL}/players`, playerData);
            console.log("Player added successfully:", response.data);
            
            // Show success message and reset form
            setSuccessMessage("Player added successfully!");
            setErrorMessage("");
            setPlayerData({
                name: "",
                age: "",
                role: "",
                battingStyle: "",
                bowlingStyle: "",
                nationality: "",
                team: "",
                jerseyNumber: "",
                imageUrl: ""
            });
            
            // Success message disappears after 3 seconds
            setTimeout(() => {
                setSuccessMessage("");
            }, 3000);
        } catch (error) {
            console.error("Error adding player:", error);
            setErrorMessage(error.response?.data?.message || "Error adding player. Please try again.");
            setSuccessMessage("");
        } finally {
            setIsLoading(false);
        }
    };

    const viewAddedPlayers = () => {
        navigate("/added");
    };

    return (
        <div className="add-player-container">
            <div className="add-player-card">
                <div className="add-player-header">
                    <h2>Add New Player</h2>
                    <button 
                        className="view-players-btn"
                        onClick={viewAddedPlayers}
                    >
                        View Added Players
                    </button>
                </div>
                <p className="add-player-subtitle">Enter player details to add to the roster</p>
                
                {successMessage && <div className="success-message">{successMessage}</div>}
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                
                <form className="add-player-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Player Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={playerData.name}
                                onChange={handleChange}
                                placeholder="Enter player name"
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                value={playerData.age}
                                onChange={handleChange}
                                placeholder="Enter player age"
                                min="15"
                                max="50"
                            />
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="role">Role *</label>
                            <select
                                id="role"
                                name="role"
                                value={playerData.role}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select role</option>
                                <option value="Batsman">Batsman</option>
                                <option value="Bowler">Bowler</option>
                                <option value="All-rounder">All-rounder</option>
                                <option value="Wicket-keeper">Wicket-keeper</option>
                            </select>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="team">Team *</label>
                            <select
                                id="team"
                                name="team"
                                value={playerData.team}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select team</option>
                                <option value="Mumbai Indians">Mumbai Indians</option>
                                <option value="Chennai Super Kings">Chennai Super Kings</option>
                                <option value="Royal Challengers Bangalore">Royal Challengers Bangalore</option>
                                <option value="Kolkata Knight Riders">Kolkata Knight Riders</option>
                                <option value="Delhi Capitals">Delhi Capitals</option>
                                <option value="Rajasthan Royals">Rajasthan Royals</option>
                                <option value="Punjab Kings">Punjab Kings</option>
                                <option value="Sunrisers Hyderabad">Sunrisers Hyderabad</option>
                                <option value="Gujarat Titans">Gujarat Titans</option>
                                <option value="Lucknow Super Giants">Lucknow Super Giants</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="battingStyle">Batting Style</label>
                            <select
                                id="battingStyle"
                                name="battingStyle"
                                value={playerData.battingStyle}
                                onChange={handleChange}
                            >
                                <option value="">Select batting style</option>
                                <option value="Right-handed">Right-handed</option>
                                <option value="Left-handed">Left-handed</option>
                            </select>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="bowlingStyle">Bowling Style</label>
                            <select
                                id="bowlingStyle"
                                name="bowlingStyle"
                                value={playerData.bowlingStyle}
                                onChange={handleChange}
                            >
                                <option value="">Select bowling style</option>
                                <option value="Right-arm fast">Right-arm fast</option>
                                <option value="Left-arm fast">Left-arm fast</option>
                                <option value="Right-arm medium">Right-arm medium</option>
                                <option value="Left-arm medium">Left-arm medium</option>
                                <option value="Right-arm off-spin">Right-arm off-spin</option>
                                <option value="Left-arm orthodox">Left-arm orthodox</option>
                                <option value="Leg-break">Leg-break</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="nationality">Nationality</label>
                            <input
                                type="text"
                                id="nationality"
                                name="nationality"
                                value={playerData.nationality}
                                onChange={handleChange}
                                placeholder="Enter player nationality"
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="jerseyNumber">Jersey Number</label>
                            <input
                                type="number"
                                id="jerseyNumber"
                                name="jerseyNumber"
                                value={playerData.jerseyNumber}
                                onChange={handleChange}
                                placeholder="Enter jersey number"
                            />
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="imageUrl">Player Image URL</label>
                        <input
                            type="url"
                            id="imageUrl"
                            name="imageUrl"
                            value={playerData.imageUrl}
                            onChange={handleChange}
                            placeholder="Enter player image URL"
                        />
                    </div>
                    
                    <div className="form-buttons">
                        <button 
                            type="submit" 
                            className="add-player-submit-btn"
                            disabled={isLoading}
                        >
                            {isLoading ? "Adding..." : "Add Player"}
                        </button>
                        <Link to="/player-list" className="cancel-button">
                            Cancel
                        </Link>
                    </div>
                </form>
                
                <div className="add-player-footer">
                    <p>Fields marked with * are required</p>
                </div>
            </div>
        </div>
    );
};

export default AddPlayer;