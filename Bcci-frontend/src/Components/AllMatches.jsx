import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, Filter, Home, ChevronLeft } from "lucide-react";
import "./AllMatches.css";

const AllMatches = () => {
  // State for filters
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeFormat, setActiveFormat] = useState("All");

  // Add more matches to the existing ones from UpcomingMatches
  const allMatches = [
    {
      id: 1, 
      team1: "India",
      team2: "Australia",
      team1Logo: "./Flags/INDIA.png",
      team2Logo: "./Flags/Australia.png",
      date: "Apr 5, 2025",
      time: "14:30 IST",
      venue: "MCG",
      tournament: "ODI Series",
      format: "ODI"
    },
    {
      id: 2,
      team1: "England",
      team2: "South Africa",
      team1Logo: "./Flags/England.png",
      team2Logo: "./Flags/SA.png",
      date: "Apr 7, 2025",
      time: "19:00 GMT",
      venue: "Lords",
      tournament: "T20 World Cup",
      format: "T20"
    },
    {
      id: 3,
      team1: "Pakistan",
      team2: "NewZealand",
      team1Logo: "./Flags/Pakistan.png",
      team2Logo: "./Flags/NZ.png",
      date: "Apr 9, 2025",
      time: "10:00 PKT",
      venue: "Lahore",
      tournament: "Test Series",
      format: "Test"
    },
    {
      id: 4,
      team1: "Sri Lanka",
      team2: "West Indies",
      team1Logo: "./Flags/SL.png",
      team2Logo: "./Flags/West_indies.png",
      date: "Apr 12, 2025",
      time: "13:30 LKT",
      venue: "Colombo",
      tournament: "ODI Series",
      format: "ODI"
    },
    {
      id: 5,
      team1: "Bangladesh",
      team2: "Afghanistan",
      team1Logo: "./Flags/Ban.png",
      team2Logo: "./Flags/afg.png",
      date: "Apr 15, 2025",
      time: "18:00 BDT",
      venue: "Dhaka",
      tournament: "T20 Series",
      format: "T20"
    },
    {
      id: 6,
      team1: "Zimbabwe",
      team2: "Ireland",
      team1Logo: "./Flags/zim.png",
      team2Logo: "./Flags/Ireland.png",
      date: "Apr 18, 2025",
      time: "15:00 CAT",
      venue: "Bulawayo",
      tournament: "ODI Cup",
      format: "ODI"
    },
    {
      id: 7,
      team1: "India",
      team2: "Sri Lanka",
      team1Logo: "./Flags/INDIA.png",
      team2Logo: "./Flags/SL.png",
      date: "Apr 22, 2025",
      time: "14:00 IST",
      venue: "Eden Gardens",
      tournament: "Asia Cup",
      format: "T20"
    },
    {
      id: 8,
      team1: "Australia",
      team2: "England",
      team1Logo: "./Flags/Australia.png",
      team2Logo: "./Flags/England.png",
      date: "Apr 25, 2025",
      time: "10:30 AEST",
      venue: "Sydney",
      tournament: "The Ashes",
      format: "Test"
    },
    {
      id: 9,
      team1: "South Africa",
      team2: "Pakistan",
      team1Logo: "./Flags/SA.png",
      team2Logo: "./Flags/Pakistan.png",
      date: "Apr 28, 2025",
      time: "13:00 SAST",
      venue: "Cape Town",
      tournament: "Bilateral Series",
      format: "ODI"
    },
    {
      id: 10,
      team1: "West Indies",
      team2: "NewZealand",
      team1Logo: "./Flags/West_indies.png",
      team2Logo: "./Flags/NZ.png",
      date: "May 2, 2025",
      time: "09:30 AST",
      venue: "Barbados",
      tournament: "Caribbean Series",
      format: "T20"
    },
    {
      id: 11,
      team1: "India",
      team2: "England",
      team1Logo: "./Flags/INDIA.png",
      team2Logo: "./Flags/England.png",
      date: "May 6, 2025",
      time: "10:00 IST",
      venue: "Wankhede Stadium",
      tournament: "Border-Gavaskar Trophy",
      format: "Test"
    },
    {
      id: 12,
      team1: "Bangladesh",
      team2: "Zimbabwe",
      team1Logo: "./Flags/Ban.png",
      team2Logo: "./Flags/zim.png",
      date: "May 10, 2025",
      time: "14:00 BDT",
      venue: "Mirpur",
      tournament: "Bilateral Series",
      format: "ODI"
    }
  ];

  // Filter matches based on selections
  const filteredMatches = allMatches.filter(match => {
    const formatMatch = activeFormat === "All" || match.format === activeFormat;
    // For simplicity, we're only using "Upcoming" status in this example
    const statusMatch = activeFilter === "All" || activeFilter === "Upcoming";
    return formatMatch && statusMatch;
  });

  // Format filters
  const formats = ["All", "T20", "ODI", "Test"];
  
  // Status filters
  const statusFilters = ["All", "Upcoming", "Live", "Completed"];

  return (
    <div className="all-matches-page">
      {/* Page header with back button */}
      <div className="page-header">
        <Link to="/" className="back-link">
          <ChevronLeft size={20} /> <Home size={20} />
        </Link>
        <h1>All Cricket Matches</h1>
      </div>

      {/* Filters section */}
      <div className="filters-section">
        <div className="filter-group">
          <div className="filter-label">
            <Filter size={18} /> <span>Format:</span>
          </div>
          <div className="filter-options">
            {formats.map(format => (
              <button 
                key={format}
                className={`filter-btn ${activeFormat === format ? 'active' : ''}`}
                onClick={() => setActiveFormat(format)}
              >
                {format}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <div className="filter-label">
            <Filter size={18} /> <span>Status:</span>
          </div>
          <div className="filter-options">
            {statusFilters.map(filter => (
              <button 
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Matches grid */}
      <div className="matches-grid">
        {filteredMatches.map(match => (
          <div key={match.id} className="match-card">
            <div className="match-header">
              <span className="match-tournament">{match.tournament}</span>
              <span className={`match-status ${match.format.toLowerCase()}`}>
                {match.format}
              </span>
            </div>

            <div className="teams">
              <div className="team">
                <div className="team-logo">
                  <img src={match.team1Logo} alt={match.team1} />
                </div>
                <span>{match.team1}</span>
              </div>

              <div className="vs-box">VS</div>

              <div className="team">
                <div className="team-logo">
                  <img src={match.team2Logo} alt={match.team2} />
                </div>
                <span>{match.team2}</span>
              </div>
            </div>

            <div className="match-details">
              <div className="detail"><Calendar size={16} /> {match.date}</div>
              <div className="detail"><Clock size={16} /> {match.time}</div>
              <div className="venue">{match.venue}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMatches;