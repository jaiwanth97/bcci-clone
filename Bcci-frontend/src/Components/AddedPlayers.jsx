import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddedPlayers.css";

const API_URL = "http://localhost:5000/api";

const AddedPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterTeam, setFilterTeam] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Fetch players from the API
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get(`${API_URL}/players`);
        setPlayers(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching players:", error);
        setError("Failed to load players. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  // Function to handle player deletion
  const handleDeletePlayer = async (playerId) => {
    if (window.confirm("Are you sure you want to delete this player?")) {
      try {
        await axios.delete(`${API_URL}/players/${playerId}`);
        setPlayers(prevPlayers => prevPlayers.filter(player => player._id !== playerId));
      } catch (error) {
        console.error("Error deleting player:", error);
        alert(`Failed to delete player: ${error.response?.data?.message || "Unknown error"}`);
      }
    }
  };

  // Function to handle player editing
  const handleEditPlayer = (playerId) => {
    navigate(`/player-edit/${playerId}`);
  };

  // Filtered players based on search and filters
  const filteredPlayers = players.filter(player => {
    return (
      player.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterTeam === "" || player.team === filterTeam) &&
      (filterRole === "" || player.role === filterRole)
    );
  });

  // Get unique teams for filter dropdown
  const teams = [...new Set(players.map(player => player.team))];
  const roles = ["Batsman", "Bowler", "All-rounder", "Wicket-keeper"];

  if (isLoading) {
    return <div className="cricket-players-loading">Loading players...</div>;
  }

  if (error) {
    return <div className="cricket-players-error">{error}</div>;
  }

  return (
    <div className="cricket-players-container">
      <div className="cricket-players-header">
        <h1>Cricket Players</h1>
        <Link to="/player-add" className="cricket-players-add-button">
          Add New Player
        </Link>
      </div>

      <div className="cricket-players-search-filter">
        <div className="cricket-players-search-box">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="cricket-players-search-icon">🔍</span>
        </div>

        <div className="cricket-players-filters">
          <select value={filterTeam} onChange={(e) => setFilterTeam(e.target.value)}>
            <option value="">All Teams</option>
            {teams.map(team => (
              <option key={team} value={team}>{team}</option>
            ))}
          </select>

          <select value={filterRole} onChange={(e) => setFilterRole(e.target.value)}>
            <option value="">All Roles</option>
            {roles.map(role => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
        </div>
      </div>

      {filteredPlayers.length === 0 ? (
        <div className="cricket-players-no-results">
          <div className="cricket-players-no-results-icon">🏏</div>
          <p>No players found matching your criteria.</p>
        </div>
      ) : (
        <div className="cricket-players-grid">
          {filteredPlayers.map(player => (
            <div key={player._id} className="cricket-player-card">
              <div className="cricket-player-image">
                <img 
                  src={player.imageUrl || "/placeholder-player.png"} 
                  alt={player.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/placeholder-player.png";
                  }}
                />
              </div>
              <div className="cricket-player-content">
                <h2>{player.name}</h2>
                <div className="cricket-player-stats">
                  <div className="cricket-player-stat">
                    <span className="cricket-player-stat-label">Team</span>
                    <span className="cricket-player-stat-value">{player.team}</span>
                  </div>
                  <div className="cricket-player-stat">
                    <span className="cricket-player-stat-label">Role</span>
                    <span className="cricket-player-stat-value">{player.role}</span>
                  </div>
                  <div className="cricket-player-stat">
                    <span className="cricket-player-stat-label">Nationality</span>
                    <span className="cricket-player-stat-value">{player.nationality || "Not specified"}</span>
                  </div>
                  <div className="cricket-player-stat">
                    <span className="cricket-player-stat-label">Jersey</span>
                    <span className="cricket-player-stat-value">{player.jerseyNumber || "N/A"}</span>
                  </div>
                </div>
                <div className="cricket-player-buttons">
                  <button 
                    className="cricket-player-edit-button"
                    onClick={() => handleEditPlayer(player._id)}
                  >
                    Edit
                  </button>
                  <button 
                    className="cricket-player-delete-button"
                    onClick={() => handleDeletePlayer(player._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cricket-players-footer">
        <p>Total Players: {players.length}</p>
        <Link to="/" className="cricket-players-home-link">Back to Home</Link>
      </div>
    </div>
  );
};

export default AddedPlayers;