import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area
} from "recharts";
import "./Rankings.css";

const Rankings = () => {
  const [activeTab, setActiveTab] = useState("test");
  const [activeChart, setActiveChart] = useState("bar");
  const [activeFormat, setActiveFormat] = useState("teams");

  // Sample data for different rankings
  const teamRankingsData = {
    test: [
      { name: "India", rating: 124, points: 3732, matches: 30 },
      { name: "Australia", rating: 116, points: 2796, matches: 24 },
      { name: "England", rating: 105, points: 3260, matches: 31 },
      { name: "South Africa", rating: 104, points: 2088, matches: 20 },
      { name: "New Zealand", rating: 100, points: 2001, matches: 20 },
      { name: "Pakistan", rating: 90, points: 1791, matches: 20 },
      { name: "Sri Lanka", rating: 86, points: 1716, matches: 20 },
      { name: "West Indies", rating: 76, points: 1523, matches: 20 },
      { name: "Bangladesh", rating: 50, points: 1001, matches: 20 },
      { name: "Zimbabwe", rating: 26, points: 524, matches: 20 }
    ],
    odi: [
      { name: "Australia", rating: 121, points: 2913, matches: 24 },
      { name: "India", rating: 117, points: 3512, matches: 30 },
      { name: "South Africa", rating: 111, points: 2224, matches: 20 },
      { name: "England", rating: 110, points: 3291, matches: 30 },
      { name: "New Zealand", rating: 107, points: 2133, matches: 20 },
      { name: "Pakistan", rating: 98, points: 1960, matches: 20 },
      { name: "Bangladesh", rating: 87, points: 1740, matches: 20 },
      { name: "Sri Lanka", rating: 81, points: 1614, matches: 20 },
      { name: "West Indies", rating: 72, points: 1447, matches: 20 },
      { name: "Afghanistan", rating: 70, points: 1400, matches: 20 }
    ],
    t20: [
      { name: "India", rating: 266, points: 11305, matches: 43 },
      { name: "England", rating: 258, points: 9816, matches: 38 },
      { name: "South Africa", rating: 253, points: 6829, matches: 27 },
      { name: "Pakistan", rating: 252, points: 9567, matches: 38 },
      { name: "New Zealand", rating: 250, points: 8515, matches: 34 },
      { name: "Australia", rating: 243, points: 8508, matches: 35 },
      { name: "West Indies", rating: 234, points: 8665, matches: 37 },
      { name: "Afghanistan", rating: 232, points: 7184, matches: 31 },
      { name: "Sri Lanka", rating: 224, points: 6937, matches: 31 },
      { name: "Bangladesh", rating: 210, points: 6292, matches: 30 }
    ]
  };

  const playerRankingsData = {
    test: {
      batting: [
        { name: "Joe Root", country: "England", rating: 887 },
        { name: "Kane Williamson", country: "New Zealand", rating: 883 },
        { name: "Steve Smith", country: "Australia", rating: 881 },
        { name: "Marnus Labuschagne", country: "Australia", rating: 876 },
        { name: "Babar Azam", country: "Pakistan", rating: 858 },
        { name: "Virat Kohli", country: "India", rating: 843 },
        { name: "Rishabh Pant", country: "India", rating: 801 },
        { name: "Rohit Sharma", country: "India", rating: 791 },
        { name: "Dimuth Karunaratne", country: "Sri Lanka", rating: 783 },
        { name: "Travis Head", country: "Australia", rating: 775 }
      ],
      bowling: [
        { name: "Pat Cummins", country: "Australia", rating: 908 },
        { name: "R. Ashwin", country: "India", rating: 883 },
        { name: "Jasprit Bumrah", country: "India", rating: 876 },
        { name: "Kagiso Rabada", country: "South Africa", rating: 862 },
        { name: "Shaheen Afridi", country: "Pakistan", rating: 846 },
        { name: "Kyle Jamieson", country: "New Zealand", rating: 832 },
        { name: "James Anderson", country: "England", rating: 827 },
        { name: "Neil Wagner", country: "New Zealand", rating: 819 },
        { name: "Josh Hazlewood", country: "Australia", rating: 804 },
        { name: "Tim Southee", country: "New Zealand", rating: 798 }
      ]
    },
    odi: {
      batting: [
        { name: "Babar Azam", country: "Pakistan", rating: 891 },
        { name: "Virat Kohli", country: "India", rating: 864 },
        { name: "Rohit Sharma", country: "India", rating: 847 },
        { name: "Jonny Bairstow", country: "England", rating: 823 },
        { name: "Quinton de Kock", country: "South Africa", rating: 811 },
        { name: "Aaron Finch", country: "Australia", rating: 807 },
        { name: "David Warner", country: "Australia", rating: 798 },
        { name: "Ross Taylor", country: "New Zealand", rating: 783 },
        { name: "Fakhar Zaman", country: "Pakistan", rating: 775 },
        { name: "Kane Williamson", country: "New Zealand", rating: 762 }
      ],
      bowling: [
        { name: "Trent Boult", country: "New Zealand", rating: 737 },
        { name: "Josh Hazlewood", country: "Australia", rating: 729 },
        { name: "Mehedi Hasan", country: "Bangladesh", rating: 712 },
        { name: "Jasprit Bumrah", country: "India", rating: 704 },
        { name: "Matt Henry", country: "New Zealand", rating: 691 },
        { name: "Chris Woakes", country: "England", rating: 678 },
        { name: "Mujeeb Ur Rahman", country: "Afghanistan", rating: 665 },
        { name: "Kagiso Rabada", country: "South Africa", rating: 650 },
        { name: "Mohammad Nabi", country: "Afghanistan", rating: 642 },
        { name: "Adam Zampa", country: "Australia", rating: 636 }
      ]
    },
    t20: {
      batting: [
        { name: "Dawid Malan", country: "England", rating: 841 },
        { name: "Babar Azam", country: "Pakistan", rating: 837 },
        { name: "Aaron Finch", country: "Australia", rating: 828 },
        { name: "Devon Conway", country: "New Zealand", rating: 817 },
        { name: "Virat Kohli", country: "India", rating: 810 },
        { name: "KL Rahul", country: "India", rating: 796 },
        { name: "Glenn Maxwell", country: "Australia", rating: 781 },
        { name: "Rassie van der Dussen", country: "South Africa", rating: 774 },
        { name: "Hazratullah Zazai", country: "Afghanistan", rating: 764 },
        { name: "Jos Buttler", country: "England", rating: 754 }
      ],
      bowling: [
        { name: "Tabraiz Shamsi", country: "South Africa", rating: 784 },
        { name: "Wanindu Hasaranga", country: "Sri Lanka", rating: 767 },
        { name: "Rashid Khan", country: "Afghanistan", rating: 759 },
        { name: "Adil Rashid", country: "England", rating: 740 },
        { name: "Ashton Agar", country: "Australia", rating: 727 },
        { name: "Mujeeb Ur Rahman", country: "Afghanistan", rating: 713 },
        { name: "Adam Zampa", country: "Australia", rating: 698 },
        { name: "Anrich Nortje", country: "South Africa", rating: 682 },
        { name: "Tim Southee", country: "New Zealand", rating: 669 },
        { name: "Ish Sodhi", country: "New Zealand", rating: 656 }
      ]
    }
  };

  const getCurrentData = () => {
    if (activeFormat === "teams") {
      return teamRankingsData[activeTab];
    } else {
      return playerRankingsData[activeTab][activeFormat];
    }
  };
  
  const COLORS = ["#FF6F00", "#00416A", "#FF8F00", "#005A94", "#FFA726", "#007ACC", "#FFB74D", "#0088CC", "#FFCC80", "#00A0E9"];

  return (
    <div className="rankings-container">
      <h1 className="rankings-title">International Cricket Rankings</h1>

      {/* Format Selection */}
      <div className="format-selector">
        <div 
          className={`format-tab ${activeTab === "test" ? "active" : ""}`}
          onClick={() => setActiveTab("test")}
        >
          Test
        </div>
        <div 
          className={`format-tab ${activeTab === "odi" ? "active" : ""}`}
          onClick={() => setActiveTab("odi")}
        >
          ODI
        </div>
        <div 
          className={`format-tab ${activeTab === "t20" ? "active" : ""}`}
          onClick={() => setActiveTab("t20")}
        >
          T20
        </div>
      </div>

      {/* Rankings Type Selection */}
      <div className="rankings-selector">
        <div 
          className={`rankings-tab ${activeFormat === "teams" ? "active" : ""}`}
          onClick={() => setActiveFormat("teams")}
        >
          Teams
        </div>
        {activeFormat !== "teams" && (
          <div 
            className={`rankings-tab ${activeFormat === "batting" ? "active" : ""}`}
            onClick={() => setActiveFormat("batting")}
          >
            Batting
          </div>
        )}
        {activeFormat !== "teams" && (
          <div 
            className={`rankings-tab ${activeFormat === "bowling" ? "active" : ""}`}
            onClick={() => setActiveFormat("bowling")}
          >
            Bowling
          </div>
        )}
        {activeFormat === "teams" && (
          <div 
            className={`rankings-tab`}
            onClick={() => setActiveFormat("batting")}
          >
            Players
          </div>
        )}
      </div>

      {/* Chart Type Selection */}
      <div className="chart-selector">
        <button 
          className={`chart-button ${activeChart === "bar" ? "active" : ""}`} 
          onClick={() => setActiveChart("bar")}
        >
          Bar Chart
        </button>
        <button 
          className={`chart-button ${activeChart === "line" ? "active" : ""}`} 
          onClick={() => setActiveChart("line")}
        >
          Line Chart
        </button>
        <button 
          className={`chart-button ${activeChart === "pie" ? "active" : ""}`} 
          onClick={() => setActiveChart("pie")}
        >
          Pie Chart
        </button>
        <button 
          className={`chart-button ${activeChart === "area" ? "active" : ""}`} 
          onClick={() => setActiveChart("area")}
        >
          Area Chart
        </button>
      </div>

      {/* Chart Display */}
      <div className="chart-container">
        {activeChart === "bar" && (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={getCurrentData()}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 70
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="rating" fill="#FF6F00" name="Rating" />
              {activeFormat === "teams" && (
                <Bar dataKey="matches" fill="#00416A" name="Matches" />
              )}
            </BarChart>
          </ResponsiveContainer>
        )}

        {activeChart === "line" && (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={getCurrentData()}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 70
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="rating" stroke="#FF6F00" activeDot={{ r: 8 }} name="Rating" />
              {activeFormat === "teams" && (
                <Line type="monotone" dataKey="matches" stroke="#00416A" name="Matches" />
              )}
            </LineChart>
          </ResponsiveContainer>
        )}

        {activeChart === "pie" && (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={getCurrentData()}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={150}
                fill="#8884d8"
                dataKey="rating"
                nameKey="name"
                label={({name, rating}) => `${name}: ${rating}`}
              >
                {getCurrentData().map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )}

        {activeChart === "area" && (
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
              data={getCurrentData()}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 70
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="rating" stroke="#FF6F00" fill="#FF6F00" name="Rating" />
              {activeFormat === "teams" && (
                <Area type="monotone" dataKey="matches" stroke="#00416A" fill="#00416A" name="Matches" />
              )}
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Rankings Table */}
      <div className="rankings-table-container">
        <h2 className="table-title">
          {activeTab.toUpperCase()} {activeFormat === "teams" ? "Team" : activeFormat.charAt(0).toUpperCase() + activeFormat.slice(1)} Rankings
        </h2>
        <table className="rankings-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>{activeFormat === "teams" ? "Team" : "Player"}</th>
              {activeFormat !== "teams" && <th>Country</th>}
              <th>Rating</th>
              {activeFormat === "teams" && <th>Points</th>}
              {activeFormat === "teams" && <th>Matches</th>}
            </tr>
          </thead>
          <tbody>
            {getCurrentData().map((item, index) => (
              <tr key={index} className={index === 0 ? "first-rank" : ""}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                {activeFormat !== "teams" && <td>{item.country}</td>}
                <td>{item.rating}</td>
                {activeFormat === "teams" && <td>{item.points}</td>}
                {activeFormat === "teams" && <td>{item.matches}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rankings;