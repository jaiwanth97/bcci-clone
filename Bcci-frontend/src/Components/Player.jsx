import React, { useState, useEffect } from 'react';
import { searchPlayers, getPlayerDetails } from '../services/api'; // Assuming this is where your API functions are located
import './Player.css'; // We'll create custom CSS for this component

const Player = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Perform the search
  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const results = await searchPlayers(searchQuery);
      setSearchResults(results);
      setSelectedPlayer(null);
    } catch (err) {
      console.error("Error searching players:", err);
      setError("Failed to search players. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle player selection
  const handlePlayerSelect = async (playerId) => {
    setLoading(true);
    setError(null);
    
    try {
      const playerData = await getPlayerDetails(playerId);
      setSelectedPlayer(playerData);
    } catch (err) {
      console.error("Error fetching player details:", err);
      setError("Failed to load player details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cricket-player-container">
      <div className="cricket-search-section">
        <h1>Player Search</h1>
        <form onSubmit={handleSearch} className="cricket-search-form">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for cricket players..."
            className="cricket-search-input"
          />
          <button type="submit" className="cricket-search-button">Search</button>
        </form>
      </div>

      {loading && <div className="cricket-loading-spinner">Loading...</div>}
      
      {error && <div className="cricket-error-message">{error}</div>}
      
      {!loading && !error && searchResults.length > 0 && !selectedPlayer && (
        <div className="cricket-search-results">
          <h2>Search Results</h2>
          <div className="cricket-player-cards">
            {searchResults.map((player) => (
              <div 
                key={player.id} 
                className="cricket-player-card"
                onClick={() => handlePlayerSelect(player.id)}
              >
                <div className="cricket-player-card-inner">
                  <h3>{player.name}</h3>
                  <p>Country: {player.country || 'Unknown'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {!loading && !error && searchResults.length === 0 && searchQuery && (
        <div className="cricket-no-results">No players found. Try a different search term.</div>
      )}
      
      {selectedPlayer && (
        <div className="cricket-player-details">
          <button 
            className="cricket-back-button" 
            onClick={() => setSelectedPlayer(null)}
          >
            ← Back to Results
          </button>
          
          <div className="cricket-player-profile">
            <div className="cricket-player-header">
              {selectedPlayer.playerImg ? (
                <img 
                  src={selectedPlayer.playerImg} 
                  alt={selectedPlayer.name}
                  className="cricket-player-image"
                  onError={(e) => {
                    e.target.src = '/player-placeholder.png'; // Fallback image
                    e.target.onerror = null;
                  }}
                />
              ) : (
                <div className="cricket-player-image-placeholder">
                  <span>{selectedPlayer.name.charAt(0)}</span>
                </div>
              )}
              
              <div className="cricket-player-info">
                <h2>{selectedPlayer.name}</h2>
                <p className="cricket-player-country">{selectedPlayer.country}</p>
                <div className="cricket-player-basic-stats">
                  <div className="cricket-stat-item">
                    <span className="cricket-stat-label">Role</span>
                    <span className="cricket-stat-value">{selectedPlayer.role || 'N/A'}</span>
                  </div>
                  <div className="cricket-stat-item">
                    <span className="cricket-stat-label">Batting</span>
                    <span className="cricket-stat-value">{selectedPlayer.battingStyle || 'N/A'}</span>
                  </div>
                  <div className="cricket-stat-item">
                    <span className="cricket-stat-label">Bowling</span>
                    <span className="cricket-stat-value">{selectedPlayer.bowlingStyle || 'N/A'}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {selectedPlayer.stats && (
              <div className="cricket-player-statistics">
                <h3>Career Statistics</h3>
                
                <div className="cricket-stats-tables">
                  {/* Batting Stats */}
                  {selectedPlayer.stats.batting && (
                    <div className="cricket-stats-table cricket-batting-stats">
                      <h4>Batting</h4>
                      <table>
                        <thead>
                          <tr>
                            <th>Format</th>
                            <th>M</th>
                            <th>Inns</th>
                            <th>Runs</th>
                            <th>Avg</th>
                            <th>SR</th>
                            <th>50s</th>
                            <th>100s</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(selectedPlayer.stats.batting).map(([format, stats]) => (
                            <tr key={format}>
                              <td>{format}</td>
                              <td>{stats.matches || '-'}</td>
                              <td>{stats.innings || '-'}</td>
                              <td>{stats.runs || '-'}</td>
                              <td>{stats.average || '-'}</td>
                              <td>{stats.strikeRate || '-'}</td>
                              <td>{stats.fifties || '-'}</td>
                              <td>{stats.hundreds || '-'}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  
                  {/* Bowling Stats */}
                  {selectedPlayer.stats.bowling && (
                    <div className="cricket-stats-table cricket-bowling-stats">
                      <h4>Bowling</h4>
                      <table>
                        <thead>
                          <tr>
                            <th>Format</th>
                            <th>M</th>
                            <th>Inns</th>
                            <th>Wkts</th>
                            <th>Econ</th>
                            <th>Avg</th>
                            <th>SR</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(selectedPlayer.stats.bowling).map(([format, stats]) => (
                            <tr key={format}>
                              <td>{format}</td>
                              <td>{stats.matches || '-'}</td>
                              <td>{stats.innings || '-'}</td>
                              <td>{stats.wickets || '-'}</td>
                              <td>{stats.economy || '-'}</td>
                              <td>{stats.average || '-'}</td>
                              <td>{stats.strikeRate || '-'}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Player;