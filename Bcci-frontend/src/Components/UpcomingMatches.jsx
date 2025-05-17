import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Calendar, Clock } from "lucide-react";
import "./UpcomingMatches.css";

const UpcomingMatches = () => {
  const scrollRef = useRef(null);

  const matches = [
    {
      id: 1,
      team1: "India",
      team2: "Australia",
      team1Logo: "./Flags/INDIA.png",
      team2Logo: "./Flags/Australia.png",
      date: "Apr 5, 2025",
      time: "14:30 IST",
      venue: "MCG",
      tournament: "ODI Series"
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
      tournament: "T20 World Cup"
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
      tournament: "Test Series"
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
      tournament: "ODI Series"
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
      tournament: "T20 Series"
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
      tournament: "ODI Cup"
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 400;
      current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="matches" className="upcoming-matches-section">
      <div className="matches-container">
        <div className="matches-header">
          <h2>Upcoming Matches</h2>
          <div className="nav-buttons">
            <Link to="/all-matches" className="see-all-btn">See All</Link>
            <button onClick={() => scroll("left")} className="nav-btn"><ChevronLeft size={20} /></button>
            <button onClick={() => scroll("right")} className="nav-btn"><ChevronRight size={20} /></button>
          </div>
        </div>

        <div ref={scrollRef} className="matches-scroll">
          {matches.map(match => (
            <div key={match.id} className="match-card">
              <div className="match-header">
                <span className="match-tournament">{match.tournament}</span>
                <span className="match-status">Upcoming</span>
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
    </section>
  );
};

export default UpcomingMatches;