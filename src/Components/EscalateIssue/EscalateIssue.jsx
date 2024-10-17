import React, { useEffect, useState } from "react";
import "./Escalate.css";
import NavBar from "../MainPage/NavBar";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import axios from "axios";
import DatePicker from "react-datepicker"; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles

// Pagination Component
function Pagination({ totalPages, currentPage, onPageChange }) {
  const buttonStyle = {
    padding: "5px 10px",
    margin: "0 5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "#f0f0f0",
    cursor: "pointer",
    outline: "none",
    fontSize: "16px",
  };

  const activeStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    borderColor: "#007bff",
  };

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          style={
            currentPage === index + 1
              ? { ...buttonStyle, ...activeStyle }
              : buttonStyle
          }
          key={index}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

// Image Component
function Image({ issues }) {
  return (
    <img
      src={issues.IssueImage}
      alt="issue"
      className="issue-img"
      style={{
        width: "330px",
        height: "170px",
        borderRadius: "10px",
        border: "3px solid rgba(57, 91, 100, 1)",
      }}
    />
  );
}

// Single Issue Component
function Issue({ issue }) {
  return (
    <div className="issue">
      <div className="image-box">
        <Image issues={issue} />
      </div>
      <div className="issue-elements">
        <div className="line-onee">
          <span>ISSUE TYPE : {issue.IssueType}</span>
          <button onClick={() => navigator.clipboard.writeText(issue._id)}>
            COPY
          </button>
        </div>
        <div className="line-twoo">
          <span>ISSUE FROM : {issue.reportedBy}</span>
          <span className="date"> DATE OF ISSUE : {issue.createdAt}</span>
        </div>
        <div className="line-three">
          <span className="location"> LOCATION : {issue.IssueLocation}</span>
        </div>
      </div>
    </div>
  );
}

// Issue List Component
function IssueList({ issues }) {
  if (issues.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          color: "rgba(57, 91, 100, 1)",
          fontSize: "18px",
          margin: "20px 0",
        }}
      >
        No issues found based on the filter criteria.
      </div>
    );
  }

  return (
    <div>
      <ul className="issue-list">
        {issues.map((issue) => (
          <li className="issue-item" key={issue._id}>
            <Issue issue={issue} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function EscalateIssues() {
  const [currentPage, setCurrentPage] = useState(1);
  const [Data, setData] = useState([]); // Holds all data fetched
  const [filteredIssues, setFilteredIssues] = useState([]); // Holds filtered data
  const [selectedFilter, setSelectedFilter] = useState(null); // Track filter
  const [filter, setFilter] = useState({ location: "", date: "" }); // Filter state
  const [selectedDate, setSelectedDate] = useState(null); // Date state for DatePicker

  const issuesPerPage = 5;
  const totalPages = Math.ceil(filteredIssues.length / issuesPerPage);
  const currentIssues = filteredIssues.slice(
    (currentPage - 1) * issuesPerPage,
    currentPage * issuesPerPage
  );

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  // Apply filter based on location and date
  const applyFilter = () => {
    const { location } = filter;
    const date = selectedDate
      ? `${selectedDate.getFullYear()}-${String(
          selectedDate.getMonth() + 1
        ).padStart(2, "0")}` // Format as YYYY-MM
      : "";

    const filtered = Data.filter((issue) => {
      return (
        (location === "" ||
          issue.IssueLocation.toLowerCase().includes(location.toLowerCase())) &&
        (date === "" || issue.createdAt.includes(date))
      );
    });

    setFilteredIssues(filtered); // Update filtered issues
    setCurrentPage(1); // Reset to page 1 after applying filter
  };

  // Fetch issues data from the API
  const fetchIssues = async () => {
    const BASE_URL = "https://greenguard.onrender.com";
    const token = localStorage.getItem("authToken");
    const tokenWithoutQuotes = token?.replace(/^"|"$/g, ""); // Clean token if exists

    try {
      const response = await axios.get(BASE_URL + "/issues/all", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenWithoutQuotes}`,
        },
      });

      const issues = response.data;
      setData(issues); // Store all issues data
      setFilteredIssues(issues); // Initially, display all issues
    } catch (error) {
      console.log(error);
      window.alert("Error in fetching issues. Please try again later.");
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  const options = [
    { value: "location", label: "Search by Location" },
    { value: "date", label: "Search by Date" },
  ];

  return (
    <div className="issue-container">
      <div className="nav">
        <NavBar />
      </div>

      <div className="content">
        <div className="filter-section">
          <Dropdown
            options={options}
            onChange={(option) => {
              setSelectedFilter(option);
              setFilter({ location: "", date: "" }); // Reset filters when changing the dropdown
            }}
            placeholder="Select a filter"
          />

          {selectedFilter && (
            <div className="filter-inputs">
              {selectedFilter.value === "location" && (
                <>
                  <input
                    type="text"
                    name="location"
                    placeholder="Enter Location"
                    value={filter.location}
                    onChange={handleFilterChange}
                    className="filter-input"
                  />
                </>
              )}

              {selectedFilter.value === "date" && (
                <>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="MM/yyyy" // Only show month and year
                    showMonthYearPicker // Enables month and year selection
                    placeholderText="Select Month and Year"
                    className="filter-input"
                  />
                </>
              )}

              <button className="apply-filter-button" onClick={applyFilter}>
                Apply Filter
              </button>
            </div>
          )}
        </div>
        <IssueList issues={currentIssues} />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default EscalateIssues;
